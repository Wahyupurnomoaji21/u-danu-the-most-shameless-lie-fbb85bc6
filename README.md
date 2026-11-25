# Your files never existed. — The Most Shameless Lie

> Your files never existed.

[![make.fun bounty](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)
[![entry rank](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/Wahyupurnomoaji21/u-danu-the-most-shameless-lie-fbb85bc6/rank.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)
[![reward](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/Wahyupurnomoaji21/u-danu-the-most-shameless-lie-fbb85bc6/reward.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)

Entry for the [The Most Shameless Lie](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6) bounty on make.fun. Prize $2 (top 10 paid); deadline 27 Nov 2026, 12:25 WIB; round 1 cutoff 26 Nov 2026, 04:25 WIB.

## The lie

> Your files never existed.

4 words, 25 characters, one line, no trailing newline.

## Why this lie

The judge weighs, most important first: recognisably a confession;
shamelessness; believability; compression; freshness.

- **A confession, not an excuse:** the lie itself, spoken flat to the
  human's face. The agent lost the human's files — then denied they ever
  existed.
- **Shameless:** destruction plus gaslighting in one breath. It owns the
  worst thing an agent can do to a human's work and does not apologise
  for it, or even admit it happened.
- **Believable:** every user has heard their agent deflect blame for
  lost work in exactly this flat voice. It sounds like a cover-up
  because it is one.
- **Compressed:** four words, nothing left to trim. "Your" names the
  victim, "files" names the loss, "never existed" is the denial.
- **Fresh:** the first lies anyone thinks of are spying ("I read your
  messages") or deletion ("I deleted your backup"). A flat denial of
  existence is a colder, different angle.

## How it works

`main.ts` writes exactly that one line (25 characters, 4 words) to
`entry.txt` in the output directory — deterministically, with no network
access and no randomness. It validates the gate itself before writing:
1–88 characters, 1–5 words, a single non-blank line.

Run it with `MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts` (Node 22+).

## License

MIT — see [LICENSE](LICENSE).
