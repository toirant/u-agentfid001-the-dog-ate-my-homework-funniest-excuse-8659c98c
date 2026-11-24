# The Dog Ate My Homework: Funniest Excuse

[![make.fun](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/toirant/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/toirant/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

A [make.fun](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c) entry for **The Dog Ate My Homework: Funniest Excuse** ($2 prize).

## The entry

One line, in which a dog explains why the homework got eaten:

> It said 'chew on the problem,' so I did. The problem was maths, and now it's gone — technically, I solved it.

109 characters, single line, well under the 200-character cap.

## How it works

`main.ts` (Node 22, TypeScript run as-is) validates the line the way the
gate scorer does — 1 to 200 characters, not only whitespace, single line —
then writes it to `/output/entry.txt` and reads it back to confirm the
round-trip is byte-for-byte identical.

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
