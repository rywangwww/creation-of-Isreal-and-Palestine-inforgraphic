# Editor flags from the plain-English pass

These are issues the editors noticed while rewriting text. They did not change any facts; each needs a human reviewer to check against the sources.


## out-events-1.json

- **hebrew-university-cornerstone-1918**: Allenby's attendance at the ceremony is unverified in the source text; public text says 'is reported to have attended'.
- **arab-nationalists-executed-1916**: Name appears as 'Djemal Pasha' in the summary and 'Jamal' in interpretations; likely the same person, spelling not harmonised.
- **wejh-capture-1917**: Pronoun 'he' in 'he arrived two days after the fighting' is ambiguous (presumably Faisal); also the source is described as a secondary summary of Lawrence's account.
- **arab-revolt-1916**: Date Mecca was taken: 'early July' with one source giving 9 July; unresolved.
- **balfour-declaration-1917**: 'Roughly nine-tenths of the population' for the Arab majority is a rounded figure with no source given in the record.
- **buraq-1929**: Death tolls given as 'more than 130' Jews and 'more than 110' Arabs; no source cited.

## out-events-2.json

- **jericho-conference-1948**: Four interpretations, but views 1 and 3 and views 2 and 4 are near duplicates; kept as is to preserve count and order. Reviewer may merge.
- **capture-of-damascus-1918**: Summary gives 30 September-1 October while start_date is 1918-10-01; also unclear who 'Lawrence' is by full name in the text.
- **al-qastal-1948-04-08**: Death date of al-Husayni was attributed to a single database source in the input; source removed from public text.
- **herzl-kaiser-meeting-1898**: Interpretation was attributed to Wikipedia, not a named historian; attribution removed. Needs a proper source.
- **meir-abdullah-1947-11-17**: Summary has no date or place in text; the Danin attendance is hedged ('some accounts') in the input.
- **einstein-presidency-offer-1952-11-18**: Significance field contains Weizmann's death and Ben-Zvi's election rather than why the offer matters; kept as written.
- **bevin-un-referral-1947**: Input says Britain had failed to reconcile positions 'at the London conference' without a year; unchanged.

## out-events-3.json

- **first-arab-congress-1913**: start_date has a day (18 June) but sources consulted give only the month; the day is unconfirmed.
- **first-palestine-arab-congress-1919**: start_date day (27 January) not confirmed; source gives only the year.
- **gaza-national-council-1948**: start_date day (22 September) not confirmed; sources say only 'end of September'.
- **alexandria-conference-1944**: Alami's participation is dated to 25 September-7 November 1944 in one source but the Protocol is dated 7 October; the 'continued consultations' explanation is a guess.
- **bludan-congress-1937**: Source says Hajj Amin organised the congress but not that he attended; kept as written.
- **thirteenth-zionist-congress-1923**: Very thin record; significance field originally only described a source gap, so it was replaced with a restatement of the summary.
- **seventh-zionist-congress-1905**: Summary says Nordau 'delivered a eulogy' without naming the subject; I glossed it as being for Herzl. Please confirm.
- **seventeenth-zionist-congress-1931**: Dates differ between sources (30 June-17 July vs mid-to-late July); start_date is 1 July. Also the date note sits in the interpretations array although it is not an interpretation.
- **twentieth-zionist-congress-1937**: Third 'interpretation' is a date note, not a view; dates 3-16 August from one source only.
- **aaci-1946**: Significance only repeats the report date from the summary; real significance is missing.
- **zikhron-yaakov-founding-1882**: Carmel Winery start year is 1885 here but 1886 in the rishon-founding-1882 record.
- **herzl-pius-x-1904**: Date of the audience disputed (25 or 26 January); start_date is 25 January.
- **sokolow-benedict-xv-1917**: Source gives both 4 May and 6 May; start_date is 4 May.
- **evian-conference-1938**: No exact dates and no outcome details in the source; start_date is month-level.
- **first-palestine-arab-congress-1919**: Significance calls it the first of the congresses 'that formed the basis of the Arab Executive'; unsourced claim kept as written.

## out-events-4.json

- **jca-founding-1891**: Year 1891 was from general knowledge; the source gave no founding year.
- **herzl-hirsch-meeting-1895**: Place (Paris) not confirmed by sources; left out of the summary.
- **brit-shalom-1925**: Founding date, membership and both interpretations were not confirmed in a source.
- **fourth-aliyah-1924**: The Grabski tax-policy explanation was not covered in the source.
- **sursock-purchase-1921**: Khalidi, Abu-Lughod and Stein attributions were stated from knowledge, not checked; interpretations 1, 3 and 7 overlap.
- **jaffa-riots-1921**: Haycraft Commission finding not checked against the report text.
- **haavara-1933**: Interpretations overlap and camp labels are inconsistent for Revisionists.
- **irgun-revolt-1944**: Interpretations duplicate each other (two zionist, two british views of the same point).
- **hapoel-hatzair-founding-1905**: Founded 1905 but founding conference 1907; summary keeps both as written.

## out-events-5.json

- **aden-riots-1947**: Short gives '38 or more Arabs' dead, but the summary does not mention Arab deaths; the 38 figure is unsupported in the body text.
- **king-david-hotel-1946**: Named dead (41+28+17=86) do not reach the headline 91; text says 'plus others'. Palestinian-Arab view says 'Arab and Jewish staff' while summary lists Arabs separately.
- **commons-white-paper-vote-1939**: Original said the vote made the policy 'law-like'; unclear claim, reworded to 'binding in practice' without checking.
- **magic-carpet-1949**: Record id says 1949 and start_date is 1948-12-16, while the Imam's reversal is dated 1949 in the summary.
- **palestine-regiment-1942**: Summary says Arab Palestinians served in smaller numbers but gives 4,000 Arabs by 1942 from one historian and says other counts are smaller; figures are not reconciled.
- **tripoli-pogrom-1945**: Short says 'over 130' killed while summary says 130 to over 140; both kept as written.
- **syrian-general-congress-1919**: Summary says the Congress ended when France defeated Faisal in July 1920; start date is only May 1919 and no end date field exists.

## out-obs-1.json

- **hankin-04**: Event dated 1921 but note says one source gives 1920; kept as written.
- **dbg-17**: Record uses 9-11 May 1942 while the conference is dated 6-11 May; kept as written.
- **tel-16**: A source dates the Colonial Office role to Feb 1920 but record uses 1921; kept as written.

## out-people-1.json

- **musa-kazim-husseini**: Role says 'President of the Palestine Arab Executive' but bio says 'Arab Executive Committee'; names kept as written.
- **edmund-allenby**: Role says 'High Commissioner for Egypt' but bio says 'Special High Commissioner for Egypt'; kept as written.
- **arthur-wauchope**: Bio says 'early 1930s until retirement in 1938' while role says 1931-1938; wording kept as written.
- **faisal**: Birth year (1883 or 1885) and birthplace (Mecca or Ta'if) disputed; public note added.

## out-people-2.json

- **golda-meir**: Source note says the record may duplicate one added by another researcher; deduplicate by id.
- **wilhelm-ii**: Day-level dates for the Jerusalem stay (2 November 1898) were from general knowledge and need checking.
- **najib-nassar**: Bio says he died in December 1947, but the date of death is disputed (28 December 1947 or 3 March 1948) and the record's death_date is 1948-03-03.
- **najib-azuri**: Birth and death years were given from memory and are unverified.
- **khalil-raad**: Birth year conflicts (1854 vs 1869); the record uses 1869. Post-1948 residence conflicts.
- **yusuf-diya-al-khalidi**: Death date 25 January 1906 flagged as needing citation; mayoral term dates vary.
- **khalil-al-sakakini**: Died 1953, after the project's 1952 end date; prison release date differs between sources.
- **hajj-amin-al-husseini**: Birth year disputed (1895/1896/1897); record uses 1895.
- **ruhi-al-khalidi**: Exact death date unconfirmed; poisoning claim is a family belief.
- **abba-hillel-silver**: Short says he spoke for the Zionist cause at the UN, taken from the bio's 'chief Zionist spokesmen'.
- **hasan-salama**: Birth year 1912 vs 1913 (record date 1913-01-01).
- **robert-capa**: Dates of his Israel visits unconfirmed.
- **anbara-salam-khalidi**: Day of death unknown; record death_date 1986-05-31 is a placeholder day.

## out-people-3.json

- **abd-al-qadir-al-husayni**: Input notes say birth year 1907 or 1908 while review text also mentions 1910; public note lists 1907, 1908 or 1910.
- **pavel-krushevan**: Input short says he published an early version of the Protocols, but bio says he serialised them in Znamya in 1903; consistent, but 'early version' wording not independently supported.
- **nikolay-ignatyev**: Short says 'temporary' rules in 1882; bio calls them May Laws of 1882. Consistent but 'restricted where Jews could live and trade' is not in the bio text.

## out-people-4.json

- **eliyahu-golomb**: Short says 'first quarter-century'; this is not in the bio.
- **pinhas-rutenberg**: Short names Naharayim and Jaffa power stations; not in the bio.
- **hillel-kook**: Short says campaign was for a Jewish army; not in the bio.
- **sasson-eskell**: Short says he served 'under King Faisal I'; not in the bio.
- **khalil-beidas**: Short's claims (Nazareth birth, pioneer of short story and novel, warnings on Zionist immigration) are not in the bio.
- **tarab-abdel-hadi**: Short says she hosted the first meeting; bio says she helped found the Congress.
- **zlikha-al-shihabi**: Short says first treasurer; not in bio.
- **ibn-saud**: Short says close ties with Britain and the US; not in the bio.
- **charles-crane**: Short says the commission found most people opposed the Zionist program; bio says only that the report warned against the full program.
- **yehoshua-hankin**: Short says he arranged 'most major' land purchases; bio does not support this.
- **isaac-jacob-reines**: Short says 'Lithuanian'; bio gives Karolin near Pinsk, no nationality.
- **henryk-erlich**: Short quotes 'Siamese twin'; the quote is not in the bio.
- **hans-kohn**: Short says he left the Zionist Organization; bio says he resigned from Keren Hayesod.
- **avraham-mordechai-alter**: Short says he rebuilt his court in Jerusalem; not in the bio.
- **izz-ad-din-al-qassam**: Short says British forces killed him; bio does not say who.
- **nuh-ibrahim**: Bio source was Wikipedia for student-of-al-Qassam claim; now worded as 'is described as'.
- **shlomo-hillel**: Short says 1950-52; bio gives 1950 only.
- **frederick-kisch**: Short says 'in the 1920s' and Jerusalem; bio gives 1922-1931 and Palestine.
- **claude-montefiore**: League of British Jews co-founder claim rests on Wikipedia only.
