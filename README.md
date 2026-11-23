# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/kanzaa28/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/kanzaa28/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

# The World in One Page — Monday 23 November 2026

**Practice-only entry.** `handed_over_places` is "none", so an entry built in
this harness is ranked but cannot take a paid place. A real submission still
needs the user's public GitHub repo (created after 23 Nov 00:00 UTC) +
transcript bundle from recorded sessions + the user's go-ahead.

## What it is

A one-page newspaper front page summing up **Monday 23 November 2026**,
drawn programmatically with PIL (real text — no AI-image garbling, legible at
~300 px):

- **Lead:** NATO's council meets in emergency session in Brussels as Poland
  confirms the three objects that crashed in its south-east on Friday were
  Russian Kh-101 cruise missiles; PM Donald Tusk calls it an "intentional
  provocation" and NATO chief Mark Rutte says the alliance will defend
  "every inch" of Polish territory. No one was hurt.
- **Climate:** COP31 collapses in Antalya — the first climate summit to end
  with no deal since Copenhagen in 2009, and the longest COP ever — after
  the EU and others refuse a pact that never mentions fossil fuels.
- **Middle East:** Yemen's Houthis claim missile strikes on a Saudi oil
  refinery and radar sites (at least six reported hurt); tanker attacks in
  the Strait of Hormuz are at their highest level since the war began.
- **UN:** 128 states agree to pursue international rules on autonomous
  ("killer robot") weapons by 2028.
- **Sport:** FIFA is set to confirm the UK as host of the 2035 Women's World
  Cup — the first in Britain since 1966.
- **Markets/shipping:** Asian markets open on alert after Wall Street's
  Friday plunge; a Russian cargo ship is still burning off Finland.
- **Also today:** more tankers hit mines off Hormuz; sea drones hit a Russian
  warship at Benghazi; Shuri Castle reopens in Okinawa.

Facts checked against Reuters, CNN, AP, The Hindu and the Washington Post
(via search) on the morning of 23 Nov. The NATO meeting itself is Monday's
event; Poland's missile confirmation, the COP31 collapse and the Houthi
claims were first reported Sunday 22 – Monday 23 Nov. Deliberately NOT
used: the 22 Nov Iran/Bahrain strikes and Ukraine barrage (the 22 Nov
edition's lead), the 20 Nov Lviv barrage and Poland incident itself (the
21 Nov edition's lead), and unverified aggregator items (Taiwan market-crash
figures, a claimed Putin–Trump–Xi summit).

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` validates `entry.png` (PNG signature, IHDR canvas 1024×1024,
per-chunk CRCs, no trailing bytes, ≤ 1 MiB), publishes it to
`$MAKEFUN_OUTPUT_DIR` (or `/output`), then reads the published file back
and byte-verifies it.

## Measured results

- Kit: 11/11 files match kit.json sha256 (bundle 444e0a0c…).
- entry.png: 1024×1024, 166,925 bytes (sha256
  `768239f46d22f402f0534812549d0a6c3cbce08dc11fbf8f407ff53f867d95ed`).
- main.ts run twice → byte-identical outputs (same sha256).
- Official kit check (`node cli/makefun.mjs check --kit
  kit/news-image-20261123-kit --repo package --worktree`): 4 passed
  (competition_open, snapshot 6 files, license_osi MIT, entrypoint node22)
  / 1 failed (transcripts_present, expected — the parent session bundles
  transcripts) / 14 skipped / 5 at-submission. No local scorer
  (server-graded).

## Payout

50 places share $100 (1st $20, 2nd $12, 3rd $6, 4th–10th $2, 11th–50th
$1.20). Closes 25 Nov 08:00 WITA.
