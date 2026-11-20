# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/sastrokucrit-creator/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/sastrokucrit-creator/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A front-page poster summing up the world's news of Friday 20 November
2026, for the make.fun bounty `news-image-20261120`.

The lead stories are three illustrated cards in a row: Russia's night
barrage over Kyiv (110+ missiles, ~400 drones, 8 killed, 28 hurt, three
bridges hit), Cyclone Akvan's landfall in India (300,000+ evacuated),
and markets tumbling worldwide (Nikkei −5.06%, SoftBank −14.48%). The
masthead names the day — **FRIDAY 20 NOVEMBER 2026** — and the page
carries 44 stories across 7 regions: a youth strike in 25+ countries,
COP31 closing with no deal, Poland on alert after Russian missiles fell
on its soil, Italy's general strike, California shaking twice, a record
Florida river, Taiwan flagging 2,700 influence accounts, Indonesia
pressing Google over 19,000 removed channels, and gold sliding 4.2% —
plus a navy world map and 30 more stories. Every story is drawn, not
just listed: each lead has a large original vector illustration and each
of the eleven smaller stories its own mini drawing. Every story number
and map pin wears its region's colour. A red DATE CHECK box names the 19
November news (the Shenzhen trilateral, the ICJ's Myanmar verdict,
Anthropic's debut, and more) that was deliberately left out, so nothing
from an earlier day is presented as 20 November news. Round 2 re-verified
every story: six round-1 smalls and twenty-one round-1 ALSO items turned
out to be 19 November (or earlier) news and were replaced with
Friday-verified stories.

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). The image is a 1024×1024
PNG; no network is used, so two runs write identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=q86j3tvd&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
