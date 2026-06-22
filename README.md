# greymoth

**19yo solo builder in Japan.** I ship small, honest, mostly client-side tools — and I open-source the ones worth reading. House rule: say *"passes our rules,"* never *"certified."* If a tool can run without a server, it does.

### 🔧 Open source

| Repo | What it is |
|---|---|
| **[zatca-toolkit](https://github.com/greymoth-jp/zatca-toolkit)** · `Go` `WASM` `TS` | Saudi **ZATCA / EN16931** e-invoicing engine — generate, validate & sign compliant invoices on your own infra. 15/15 official-fixture conformance, secp256k1 signing, honest scope. |
| **[inkdex](https://github.com/greymoth-jp/inkdex)** · `MV3` | Track your ChatGPT / Claude usage locally, then print a risograph **"Wrapped"** card. No account, **nothing leaves your browser.** |
| **[ccwrapped](https://github.com/greymoth-jp/ccwrapped)** · `Node` | Local **Claude Code** usage analytics + a shareable Wrapped card. Reads `~/.claude`, sends nothing. |
| **[geo-checker](https://github.com/greymoth-jp/geo-checker)** · `TS` | Score any URL for AI-search / **GEO** readiness (llms.txt, JSON-LD, answer-proximity…). |

### 🚀 Live (no signup, runs in your browser)

- **[FocusSplit](https://focussplit.com)** — tasks → an instant focus timer, with a shareable Focus Receipt
- **[TANE](https://apps.apple.com/jp/app/id6779623465)** — a daily music *bloom* ritual (iOS) · also at [tanemusic.org](https://tanemusic.org)
- **[Overfit-Checker](https://overfit-checker.vercel.app)** — is your backtest overfit? Deflated Sharpe + P(overfit)
- **[Deliverability-Checker](https://deliverability-checker.vercel.app)** — SPF / DMARC / DKIM score for cold-email senders
- **[Warikancho](https://warikancho.vercel.app)** — split a group bill with the fewest transfers
- **[Tokushoho-Generator](https://tokushoho-generator.vercel.app)** — 特商法 disclosure for founders selling into Japan

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

### 💬 業務委託 / Work with me

業務委託・フルリモート・週20〜30h で動けます。設計から実装・デプロイ・運用まで一気通貫で、スタックの合うプロダクトに関わりたいと思ってます。気軽に声かけてください。
