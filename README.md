# Hi 👋

Solo SaaS dev. Next.js 15 + Better Auth + Drizzle + Cloudflare + Stripe + iOS Capacitor で個人事業主として SaaS を複数本並行運営しています。

## 直近の本番運用プロダクト

- **[focussplit](https://github.com/greymoth-jp/focussplit)** — AI Tasks → instant Pomodoro timer
- **[presense](https://github.com/greymoth-jp/presense)** — Creator Identity Hub
- **[kairon](https://github.com/greymoth-jp/kairon)** — Prediction Market × B2B Agent OS
- **[stageai](https://github.com/greymoth-jp/stageai)** — Music creator operations OS
- **[eikaiwa](https://github.com/greymoth-jp/eikaiwa)** — AI 英会話学習 SaaS
- **[churn-flow-builder](https://github.com/greymoth-jp/churn-flow-builder)** — Churn flow SaaS

## メインスタック

```
Frontend     Next.js 15 (App Router) / TypeScript / React 19 / Tailwind CSS
Backend      Better Auth / Drizzle ORM / Turso (libSQL) / Supabase
Infra        Cloudflare (Pages / R2 / KV / Workers) / Vercel / GitHub Actions
Payments     Stripe Subscription / Webhook idempotency
iOS          Capacitor + fastlane match + GitHub Actions cloud build
AI           OpenAI Realtime / Claude / Gemini Flash / Ollama / MCP
Observability Sentry / PostHog / Resend / Playwright / Vitest
```

## やっていること

- 自社 SaaS 複数本を並行で 0→MVP→本番デプロイ→特商法対応→計測まで 1〜2 ヶ月サイクルで回す
- iOS 配信を Capacitor + fastlane match + GitHub Actions macos runner で完全クラウド化
- Stripe Webhook の冪等性を event_id 基準 + outbox パターンで担保
- MCP プロトコルを使ったエージェント連携を自社プロダクトに実装

## 連絡

業務委託・フルリモート・週20〜30h・副業並行 OK で動けます。  
スタックが合うプロダクトに、 設計→実装→デプロイ→運用まで通しで関わりたいです。  
気軽にお声がけください。
