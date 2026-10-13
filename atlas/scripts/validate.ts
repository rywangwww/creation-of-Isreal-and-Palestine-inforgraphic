// Run with: npm run validate
import { existsSync, readFileSync } from 'node:fs';
import { validateDataset, validateStory } from '../src/lib/validate.ts';
import type { Chapter, Dataset, GlossaryTerm } from '../src/types.ts';

const load = (name: string) => JSON.parse(readFileSync(new URL(`../src/data/${name}.json`, import.meta.url), 'utf8'));

const data: Dataset = {
  people: load('people'),
  places: load('places'),
  observations: load('observations'),
  events: load('events'),
  sources: load('sources'),
};

// Optional: validate a draft chapters file (an array) against the current data: node scripts/validate.ts --chapters <path>
const argIdx = process.argv.indexOf('--chapters');
const chapters: Chapter[] =
  argIdx > 0 ? JSON.parse(readFileSync(process.argv[argIdx + 1], 'utf8')) : load('chapters');
const glossary: GlossaryTerm[] = load('glossary');
const problems = [...validateDataset(data), ...validateStory(data, chapters, glossary)];
// Images: every file exists and carries the licence information its licence requires.
const imageProblems: string[] = [];
const images = load('images') as { people: Record<string, Record<string, string>>; events: Record<string, Record<string, string>> };
const knownPeople = new Set(data.people.map((p) => p.id));
const knownEvents = new Set(data.events.map((e) => e.id));
for (const [kind, ids, group] of [['person', knownPeople, images.people], ['event', knownEvents, images.events]] as const) {
  for (const [id, im] of Object.entries(group)) {
    if (!ids.has(id)) imageProblems.push(`image for unknown ${kind} ${id}`);
    if (!existsSync(new URL(`../public${im.src}`, import.meta.url))) imageProblems.push(`${kind} ${id}: file ${im.src} is missing`);
    if (!im.license || !im.page_url) imageProblems.push(`${kind} ${id}: image has no licence or source link`);
    if (/fair use|non-free|all rights reserved/i.test(im.license)) imageProblems.push(`${kind} ${id}: licence "${im.license}" is not free`);
  }
}
problems.push(...imageProblems);
const drafts = [...data.observations, ...data.events].filter((x) => x.review_status !== 'verified').length;

console.log(
  `${data.people.length} people, ${data.places.length} places, ${data.observations.length} observations, ` +
    `${data.events.length} events, ${data.sources.length} sources`,
);
console.log(`${Object.keys(images.people).length} portraits, ${Object.keys(images.events).length} event images`);
console.log(`${chapters.length} chapters, ${glossary.length} glossary terms`);
console.log(`${drafts} records still awaiting page-level source verification (review_status: draft)`);
if (problems.length) {
  console.error(`\n${problems.length} integrity problem(s):`);
  for (const p of problems) console.error(`  • ${p}`);
  process.exit(1);
}
console.log('Dataset integrity checks passed.');
