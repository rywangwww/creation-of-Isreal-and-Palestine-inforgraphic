# Palestinian cluster notes

## Method and limits
- Main sources actually fetched: PalQuest (Institute for Palestine Studies) chronologies for Sakakini, Alami, Awni Abd al-Hadi, Darwaza, Abd al-Qadir al-Husayni, Nassar, Isa al-Isa, Mogannam, Jawhariyyeh, Canaan; Jerusalem Story pages for Sakakini, Hajj Amin, Nashashibi, Alami; Jadaliyya's Sakakini profile. The fetch tool returns model-made summaries, so day-level claims rest on one summarised page. Almost all observations are therefore `approximate`.
- Books cited without page numbers (Mattar 1988, Elpeleg 1993, Herf 2009, DGFP D XIII, Kayali 1997, Mogannam 1937, Jawhariyyeh 2014, Sakakini diaries, Alexandria Protocol) were NOT opened. They are cited only for facts I am confident they cover. Please verify before upgrading anything to `verified`.
- Sakakini diary dates (e.g. 26 March 1919, 4 April 1918) come from the Jerusalem Story summary, not the diaries. Only one such observation was used (sakakini-10 / nashashibi-04); the Damascus prison diary entry of 4 April 1918 is used to set the end of sakakini-07.
- Observations later than 1952 (Sakakini's death 1953, Hajj Amin 1946-74, Mughannam 1992, etc.) are inside each lifetime but outside the atlas's 1874-1952 window; trim at merge if the timeline cannot show them.

## Unresolved discrepancies
- Birth: Hajj Amin (1895/96/97), Darwaza (1887/88/89), Abd al-Qadir (1907/08/10; Istanbul vs Jerusalem), Alami (8 vs 3 May). Year precision used where contested.
- Nassar's death: 3 March 1948 (PalQuest) vs 28 December 1947 (Wikipedia).
- Alexandria conference end: PalQuest says 7 November 1944; the Protocol is dated 7 October. I used 7 October for the event.
- Sakakini's release from the Damascus prison: 10 Jan 1918 (PalQuest) vs spring 1918 (Jerusalem Story, with a prison diary entry on 4 April 1918).
- Canaan's arrest: PalQuest's timeline says 1927; its biography text says 3 September 1939. 1939 used.
- Raghib al-Nashashibi at St James 1939: Jerusalem Story says he attended (and labels him Palestine Arab Party, which looks wrong); not corroborated, so only `associated`. Election to the Ottoman parliament is given as 1908 there; check against other works (1914 is also commonly cited).
- Hajj Amin's 1930 London trip (Jerusalem Story gives January-June 1930) was left out of observations because the stay length is doubtful.
- Hajj Amin and Nebi Musa 1920 / the Hitler meeting: handled as `associated` and with interpretations attributed to Mattar, Herf and Elpeleg. I did not read these; the one-line characterisations should be checked and ideally replaced with page-cited summaries.
- First Palestine Arab Congress (27 Jan-10 Feb 1919), First Arab Congress (18-23 June 1913) and the Gaza council (22 Sept-1 Oct 1948): day-level dates come from my background knowledge, not the fetched pages (which give only month/year), so `date_precision` is `month` and summaries say so.

## Not done
- Musa Kazim al-Husseini: no new observations added (no verified facts beyond existing mk-01 to mk-06). Jamal al-Husseini: not tracked.
- Places added here (cairo, alexandria, beirut, berlin, nablus, amman, acre, hamburg, ...) may duplicate ids added by other clusters; dedupe at merge. Another agent shared the scratchpad `gen/` folder and files named data.py, events.py, build.py and sources_places.py there may have been overwritten by me or by them; my sources are in `gen-pal/`.

## Suggested further people
Emile al-Ghuri, Hasan Sidqi al-Dajani, Fakhri al-Nashashibi, George Antonius (existing source antonius-1938; Jerusalem 1942 death), Ahmad Shuqayri, Tarab Abd al-Hadi, Asma Tubi, Fadwa Tuqan and Ibrahim Tuqan, Khalil Totah (Ramallah Friends schools), Hasan al-Banna-era Palestinian figures such as Izz al-Din al-Qassam (d. Nov 1935, Ya'bad/Haifa), Akram Zuaytir, Subhi al-Khadra, Shaykh Hasan Abu al-Su'ud, Zulfa al-Sa'id, Khalil Sakakini's daughter Hala Sakakini, and the photographer Khalil Raad (Jerusalem). Primary sources worth reading directly: Sakakini diaries; Jawhariyyeh's "Storyteller of Jerusalem"; Darwaza's memoirs; Alami's "Ibrat Filastin"; Awni Abd al-Hadi's papers.
