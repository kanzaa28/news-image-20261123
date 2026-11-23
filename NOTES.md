# news-image-20261123 — build notes

Built 23 Nov 2026 (WITA) in this session. Practice-only entry
(`handed_over_places` "none"). Build only — no repo, no bundle, no submit
(parent session does those).

## Headlines used (Monday 23 November 2026)

- **Lead — NATO / Poland:** NATO's North Atlantic Council meets in
  emergency session in Brussels on Monday 23 Nov after Poland confirms
  the three objects that crashed in its south-east on Friday 20 Nov were
  Russian Kh-101 cruise missiles (Lublin prosecutors, Sunday 22 Nov).
  PM Donald Tusk calls it an "intentional provocation"; NATO chief Mark
  Rutte says the alliance will defend "every inch" of Polish territory.
  Sources: Reuters (22 Nov), eutoday.net, The Hindu.
- **COP31 collapses:** UN climate talks in Antalya end Sunday with no
  deal — first collapse since Copenhagen 2009, longest COP ever — after
  the EU and others refuse a pact with no mention of fossil fuels.
  Sources: CNN (22 Nov), WSJ, AP, phys.org.
- **Houthis claim Saudi strikes:** Houthi missile claims against a Saudi
  oil refinery and radar sites; at least six reported hurt; tanker
  attacks in the Strait of Hormuz at their highest level since the war
  began. Sources: Indian Express live updates (23 Nov), AP/CNN-UKMTO.
- **Killer robots:** 128 states agree at a UN conference to pursue
  international rules on lethal autonomous weapons by 2028.
  Source: salonvision.eu (23 Nov 01:02 UTC).
- **FIFA 2035:** FIFA set to confirm the UK as host of the 2035 Women's
  World Cup on Monday — first in Britain since 1966. Source: Google News
  roundup (23 Nov).
- **Markets / shipping:** Asian markets on alert after Wall Street's
  Friday plunge; a Russian cargo ship still burning off Finland after an
  attack. Sources: simplelife.news, jagranjosh.com (23 Nov headlines).
- **Ticker:** more tankers hit mines off Hormuz; suspected Ukrainian sea
  drones hit the Russian corvette Merkury at Benghazi (capsized, 10 hurt);
  Shuri Castle reopens in Okinawa. Sources: YouTube "What Happened in the
  World" 23 Nov roundup, AP/Reuters/BBC Verify.

Deliberately NOT used: 22 Nov Iran/Bahrain strikes and Ukraine barrage
(22 Nov edition's lead), 20 Nov Lviv barrage / Poland incident itself
(21 Nov edition's lead), unverified aggregator items (Taiwan market-crash
figures, a claimed Putin–Trump–Xi Shenzhen summit).

## Files

- entry.png: 1024x1024, 166,925 bytes
  sha256: 768239f46d22f402f0534812549d0a6c3cbce08dc11fbf8f407ff53f867d95ed
- main.ts: authored fresh in this session (PNG signature + IHDR 1024x1024
  + per-chunk CRC32 + no trailing bytes + size cap, publish, byte-verify;
  revised once to add a success log line)
  sha256: e5d849887b9943096af66b5010f087d6cb14ea15aaea42a15448bdd3fb7bc3a3
- LICENSE: MIT, SPDX-License-Identifier: MIT
- README.md: includes the 3 make.fun badge lines for kanzaa28/news-image-20261123
- .makefun/owner.json: {"wallet": "5WZTqcSuhjjizXsWk2pF7RyoN1UrYFAbT1xLWYxdqb5d"}

## Verification

- Kit: 11/11 files match kit.json sha256 (bundle 444e0a0c…).
- main.ts run twice (MAKEFUN_OUTPUT_DIR=/tmp/out1, /tmp/out2):
  both outputs byte-identical to entry.png, sha256 768239f4…
  ("published entry.png: 166925 bytes, 1024x1024, CRCs verified").
- Kit check (`node cli/makefun.mjs check --kit . --repo <package>
  --worktree`, re-run after LICENSE was added): 4 passed
  (competition_open, snapshot 6 files, license_osi MIT, entrypoint node22),
  1 failed (transcripts_present — expected, parent bundles transcripts),
  14 skipped, 5 at-submission.
