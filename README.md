```
┌───────────────────────────────────────────────────────────────────┐
│   g r e y m o t h                                    TOKYO · JP   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│   I find Japan-shaped holes in global software.                   │
│   Then I file the one-line fix into the real repo.                │
│                                                                   │
│   faceless · proof over claims · I publish what didn't work too   │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

Most global software has a Japanese blind spot. Not a bug the maintainers were careless about. A class of failure their team structurally can't see: the Enter key that submits a form mid-IME conversion, the locale file that's 511 keys short, the word counter that reads a whole Japanese paragraph as a single word. I read the changelog, trace it through the text-shaping, and send the fix. Then I write down what I found so the next person doesn't have to.

I'm faceless on purpose. The identity is the voice and the receipts, not a face. Every number below clicks through to GitHub or Apple, so check the state yourself. I'd rather you didn't take my word for it.

## Proof — the part someone else accepted

The only signal that counts is the one a maintainer reviewed and merged. Here is a slice, all in one lane: CJK, IME, and Japanese locale bugs in libraries you probably ship.

| Merged into | The Japan-shaped hole I closed |
|---|---|
| **[tusen-ai/naive-ui #8115](https://github.com/tusen-ai/naive-ui/pull/8115)** | `dynamic-tags` fired on Enter while the IME was still composing, so a half-finished kanji became a tag. Now it waits. |
| **[ant-design/ant-design #58563](https://github.com/ant-design/ant-design/pull/58563)** | `ja-JP` Typography showed the wrong expand/collapse labels. |
| **[medusajs/medusa #15839](https://github.com/medusajs/medusa/pull/15839)** | Filled 511 missing `ja` keys in the admin dashboard. |
| **[Tencent/tdesign-vue-next #6756](https://github.com/Tencent/tdesign-vue-next/pull/6756)** | Esc closed the drawer during IME composition, eating the user's input. |
| **[DouyinFE/semi-design #3313](https://github.com/DouyinFE/semi-design/pull/3313)** | The Japanese Upload crop modal was missing its text. |
| **[NG-ZORRO/ng-zorro-antd #9857](https://github.com/NG-ZORRO/ng-zorro-antd/pull/9857)** | `ja_JP` was missing its quarter placeholders. |
| **[birchill/normal-jp #94](https://github.com/birchill/normal-jp/pull/94)** | The long-vowel mark ー expanded wrong for katakana ヒ and ビ. |
| **[formatjs/formatjs #6835](https://github.com/formatjs/formatjs/pull/6835)** | `intl-relativetimeformat` ignored the `numberingSystem` option. |
| **[kufu/tamatebako #1428](https://github.com/kufu/tamatebako/pull/1428)** | 和暦 parsing couldn't read 元年 (gan-nen, "year one"). |

That's a slice. The full set of merged and open pull requests is generated **live from the GitHub API** on the [proof dashboard](https://greymoth-jp.github.io/proof-dashboard/); nothing on it is hand-typed, and open PRs are marked *in review*, not merged. There is a receipt of a different kind too: [TANE](https://apps.apple.com/app/id6779623465) passed Apple's review and is live on the App Store. Apple guarantees that listing, so open it.

## The corpus

Chasing those bugs one at a time, I noticed the same shapes kept coming back. So I catalogued them.

**[cjk-failure-corpus](https://github.com/greymoth-jp/cjk-failure-corpus)** · [`live index`](https://greymoth-jp.github.io/cjk-failure-corpus/) — **97 real CJK / IME / Unicode failures** pulled from open-source libraries, each with a repro, the affected libs, and the fix. Eleven categories: IME composition, kana/romaji, width normalization, grapheme-cluster walking, segmentation, and more. Most entries are my own merged PRs taken verbatim from the API; a few are cited upstream issues that document the same class, and those are marked as cited.

## In the lane

Tools that came out of the same work. One theme, no scatter.

| | |
|---|---|
| **[i18n-swarm](https://github.com/greymoth-jp/i18n-swarm)** · [`npm`](https://www.npmjs.com/package/i18n-swarm) | A CI check that fails the PR when a hard-coded or untranslated UI string sneaks in, before your users read the English. MIT. |
| **[jp-ready-check](https://github.com/greymoth-jp/jp-ready-check)** | A five-second Japan-market-readiness scan for any URL: hreflang `ja`, locale path, 特商法, JPY, JP content. |
| **[tokushoho-generator](https://github.com/greymoth-jp/tokushoho-generator)** | Generate a compliant Japanese 特商法 legal-notice page in ten minutes, for founders selling into Japan. |

Everything else I've shipped lives on the [hub](https://greymoth-jp.github.io).

## Signal

The number I actually trust is the [live proof dashboard](https://greymoth-jp.github.io/proof-dashboard/) — merged and open PRs, read straight from the GitHub API, self-hosted so it can't quietly break. The cards below are the usual GitHub read-out, kept in the same black-and-white.

<a href="https://github.com/anuraghazra/github-readme-stats">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=greymoth-jp&show_icons=true&hide_border=true&hide=issues&title_color=0a0a0a&text_color=3a3a3a&icon_color=0a0a0a&bg_color=f4f4f2" alt="greymoth's GitHub stats" />
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=greymoth-jp&layout=compact&hide_border=true&langs_count=8&title_color=0a0a0a&text_color=3a3a3a&bg_color=f4f4f2" alt="greymoth's top languages" />
</a>

<!-- Contribution snake, generated by a GitHub Action into the `output` branch. It renders after the workflow has run once. -->
![contribution snake](https://raw.githubusercontent.com/greymoth-jp/greymoth-jp/output/snake.svg)

## How I work

```
lane     CJK · IME · Japanese locale · Japan-market readiness
method   read the changelog · trace the text-shaping · one-line fix · write it down
stack    TypeScript · Go · a little WASM · Next.js · Cloudflare Workers
rule     verified, not asserted. "passes our rules," never "certified."
```

## Reach

- **[Glovrex](https://glovrex.com)** — where the Japan-readiness work turns into a product.
- **[greymoth-jp.github.io](https://greymoth-jp.github.io)** — the hub: every tool and every receipt in one place.
- **[@greymoth\_\_](https://x.com/greymoth__)** — build-in-public, on X.
