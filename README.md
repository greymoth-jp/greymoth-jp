# Hi 👋

Solo dev。個人事業主として複数の SaaS を 0→MVP→本番デプロイ→計測 まで一気通貫で回しつつ、e-invoicing / MCP 周りの OSS も書いています。Next.js 15 + Better Auth + Drizzle + Cloudflare + Stripe + iOS Capacitor が主戦場。

## Open Source

- **[zatca-toolkit](https://github.com/greymoth-jp/zatca-toolkit)** — GCC/ZATCA (Saudi Fatoora Phase 2) e-invoicing toolkit。EN16931 + Peppol + ZATCA バリデーション、UBL/CII/Factur-X 生成、**secp256k1 署名**、Go core → WASM + TypeScript SDK。公式 EN16931(211)+ Peppol BIS(~130)Schematron を opt-in で実行。`Apache-2.0`
- **[geo-checker](https://github.com/greymoth-jp/geo-checker)** — 生成エンジン最適化(GEO/AEO)チェッカー。ChatGPT / Perplexity / AI Overviews に拾われるかを診断。
- **[tokushoho-generator](https://github.com/greymoth-jp/tokushoho-generator)** — 特定商取引法ページ生成ツール(日本の EC/SaaS 向け)。

## 本番デプロイ済みプロダクト

- **[FocusSplit](https://www.focussplit.com)** — 深海ダイブ型フォーカスタイマー(潜って集中、Focus Score、PWA)
- **[Glovrex](https://glovrex.com)** — B2B プロダクト/会社サイト
- **[TANE](https://tane.app)** — バズる前のアングラ音楽を見つけるキュレーション(iOS 提出済)
- **[presense](https://presense.app)** — クリエイター identity hub
- **[kairon](https://kairon.app)** — 予測市場 × B2B Agent OS
- **[StageAI](https://stageai.jp)** — 不動産向け AI バーチャルステージング(空室写真 → 家具配置)
- **[ReviewOS](https://reviewos.app)** — 業種別 AI で Google レビュー返信を 10 秒に
- **[eikaiwa](https://eikaiwa.app)** — AI 英会話学習(STT + LLM + TTS)

## メインスタック

```
Frontend     Next.js 15 (App Router) / TypeScript / React 19 / Tailwind CSS
Backend      Better Auth / Drizzle ORM / Turso (libSQL) / Supabase
Infra        Cloudflare (Pages / R2 / KV / Workers) / Vercel / GitHub Actions
Payments     Stripe / Polar / RevenueCat / Webhook 冪等性
iOS          Capacitor + fastlane match + GitHub Actions cloud build
AI           Claude / Gemini / Ollama(local)/ MCP(自作サーバー多数)
Lang/Other   Go(→WASM)/ secp256k1 署名 / 電子請求標準(EN16931/Peppol/ZATCA)
Observability Sentry / PostHog / Resend / Playwright / Vitest
```

## やっていること

- 自社 SaaS を複数本、0→MVP→本番デプロイ→特商法対応→計測 まで 1〜2 ヶ月サイクルで回す
- iOS 配信を Capacitor + fastlane match + GitHub Actions macos runner で完全クラウド化
- Stripe Webhook の冪等性を event_id 基準 + outbox パターンで担保
- MCP プロトコルを使ったエージェント連携を自社プロダクト/ツールに実装(自作 MCP サーバー多数)
- コンプライアンス系(GCC/ZATCA 電子請求)を Go→WASM + 暗号署名で OSS 化

## 連絡

業務委託・フルリモート・週20〜30h・副業並行 OK で動けます。スタックが合うプロダクトに、設計→実装→デプロイ→運用まで通しで関わりたいです。気軽にお声がけください。
