# Learn Fresh Webview

## 本リポジトリの目的
DenoとFreshでデスクトップアプリを作成する

## 本リポジトリの達成目標
- [x] deno_webviewでFreshが起動する

### 結論
[本家Issue](https://github.com/denoland/fresh/issues/785)にもあったが、Freshはコンパイルすることができない。  
そのため、ローカル起動はできても本番では使い物にならない。

そもそも、現状で考えているアプリケーション構想としてはネイティブフォーム送信が関の山で、Freshが持っている機能は完全に持て余してしまう。  
素直にpreactとTailwind CSSの連携を模索したほうが建設的と判断する。

## 参考資料
- [webview_deno/examples/ssr/main.ts at main · webview/webview_deno · GitHub](https://github.com/webview/webview_deno/blob/main/examples/ssr/main.ts)
- [Denoでデスクトップアプリを作る](https://zenn.dev/hashrock/articles/cf7223d0b5e955)
- [Deno + Webview + Preact / SolidJS でデスクトップアプリ](https://zenn.dev/nikogoli/scraps/30e2a823950aba)
- [deno compile | Manual | Deno](https://deno.land/manual@v1.35.0/tools/compiler)
