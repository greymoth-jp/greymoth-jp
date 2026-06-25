# greymoth

**19, Tokyo. Solo builder.** I ship small, honest, mostly client-side dev tools — and I make foreign software Japan-ready by filing translation fixes into real OSS. House rule: say *"passes our rules,"* never *"certified."* I publish what *didn't* work, too.

### 👉 Start here

| | |
|---|---|
| 🏠 **[Hub — greymoth-jp.github.io](https://greymoth-jp.github.io)** | One page: every tool and every proof, in one place. |
| 📈 **[Live proof dashboard](https://greymoth-jp.github.io/proof-dashboard/)** | Auto-updated from the GitHub API — my merged & open OSS pull requests. Nothing hand-typed. |
| 🇯🇵 **[Japan-Readiness Index](https://greymoth-jp.github.io/japan-readiness-index/)** | How ready are foreign dev-tools for the Japanese market? A scored, public index. |
| ⭐ **[Follow for launches](https://github.com/greymoth-jp)** | I ship in public. Follow and you'll see the next tool the day it's out. |

### 📈 Proof a third party guarantees (not numbers I typed)

The signal that counts is the one someone else accepted. Every claim below clicks through to GitHub or Apple — check the state yourself.

- **Merged into real OSS** — code a maintainer reviewed and merged:
  - **[medusajs/medusa #15839](https://github.com/medusajs/medusa/pull/15839)** — filled 511 missing `ja` dashboard keys
  - **[usememos/memos #6048](https://github.com/usememos/memos/pull/6048)** — filled 24 missing `ja` keys
  - **[janhq/jan #8349](https://github.com/janhq/jan/pull/8349)** — `common.json` + terminology fixes
  - **[janhq/jan #8348](https://github.com/janhq/jan/pull/8348)** — Japanese translation update
- **More in review** across several projects — open PRs are listed live (and clearly marked as *in review*, not merged) on the [proof dashboard](https://greymoth-jp.github.io/proof-dashboard/), which reads straight from the GitHub API.
- **Shipped to the iOS App Store** — **[TANE — daily bloom](https://apps.apple.com/app/id6779623465)** passed Apple's review and is live (seller: Mahiro Hirakawa). Apple guarantees the listing; open it.

> These are deliberately *technical* proofs — a merged PR and an App Store listing are things a maintainer or an engineer can verify in one click. That's the audience I'm building for.

### 🔧 Open source

| Repo | What it is |
|---|---|
| **[zatca-toolkit](https://github.com/greymoth-jp/zatca-toolkit)** · `Go` `WASM` `TS` | Saudi **ZATCA / EN16931** e-invoicing engine — generate, validate & sign compliant invoices on your own infra. 15/15 official-fixture conformance, secp256k1 signing, honest scope. |
| **[ccwrapped](https://github.com/greymoth-jp/ccwrapped)** · `Node` · [`npm`](https://www.npmjs.com/package/@greymoth/ccwrapped) | Local **Claude Code** usage analytics + a shareable Wrapped card. Reads `~/.claude`, sends nothing. |
| **[tokenops](https://github.com/greymoth-jp/tokenops)** · `Node` · [`npm`](https://www.npmjs.com/package/@greymoth/tokenops) | **Claude Code** cost truth + data-validated optimization advice + a Before→After share card. Local-only. |
| **[inkdex](https://github.com/greymoth-jp/inkdex)** · `MV3` | Track your ChatGPT / Claude usage locally, then print a risograph **"Wrapped"** card. No account, **nothing leaves your browser.** |
| **[ghwrapped](https://github.com/greymoth-jp/ghwrapped)** · `JS` | Turn any public GitHub profile into a shareable risograph **Wrapped** card. Public data only, no token. |
| **[geo-checker](https://github.com/greymoth-jp/geo-checker)** · `TS` | Score any URL for AI-search / **GEO** readiness (llms.txt, JSON-LD, answer-proximity…). |
| **[jp-ready-check](https://github.com/greymoth-jp/jp-ready-check)** · `JS` | A 5-second **Japan-market-readiness** scan for any URL — hreflang `ja`, locale path, 特商法, JPY, JP content. |
| **[tokushoho-generator](https://github.com/greymoth-jp/tokushoho-generator)** · `TS` | Generate a Japanese **特商法** (Tokushoho) legal-notice page in 10 minutes — for founders selling into Japan. |

> *inkdex · ccwrapped · ghwrapped · tokenops* share one risograph **"Wrapped"** design language, all client-side.

### 🚀 Live (no signup, runs in your browser)

- **[FocusSplit](https://focussplit.com)** — tasks → an instant focus timer, with a shareable Focus Receipt
- **[TANE](https://apps.apple.com/jp/app/id6779623465)** — a daily music *bloom* ritual (iOS) · also at [tanemusic.org](https://tanemusic.org)
- **[Overfit-Checker](https://overfit-checker.vercel.app)** — is your backtest overfit? Deflated Sharpe + P(overfit)
- **[Deliverability-Checker](https://deliverability-checker.vercel.app)** — SPF / DMARC / DKIM score for cold-email senders
- **[Warikancho](https://warikancho.vercel.app)** — split a group bill with the fewest transfers

### 🧭 How I build

- **Honest scope** — verified, not asserted. I publish what's *not* proven, too.
- **Private by default** — these tools run client-side and send nothing.
- **Ship, then make it real** — public first, polish in the open.

### 🛠 Stack

```
Lang     TypeScript · Go · a bit of WASM
Web      Next.js 15 · React 19 · Tailwind
Edge     Cloudflare (Workers / Pages / D1 / R2) · Vercel
Data     Drizzle · Turso (libSQL) · Supabase
iOS      Capacitor · fastlane match · GitHub Actions cloud build
AI       Claude · Gemini · Ollama · MCP
```

### 💬 Work with me

Available for contract work — fully remote, 20–30 h/week. I take products end to end: design → build → deploy → operate. The fastest way to see how I work is the **[live proof dashboard](https://greymoth-jp.github.io/proof-dashboard/)** and the **[hub](https://greymoth-jp.github.io)**. Feel free to reach out.
