<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../assets/logo-dark.png">
    <img src="../assets/logo.png" width="220" alt="Ponytail、怠け者のシニア開発者">
  </picture>
</p>

<h1 align="center">Ponytail</h1>

<p align="center">
  <em>彼は何も言わない。一行だけ書く。それで動く。</em>
</p>

<p align="center">
  <a href="https://trendshift.io/repositories/50668?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-50668" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/50668" alt="DietrichGebert%2Fponytail | Trendshift" width="250" height="55"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/DietrichGebert/ponytail?style=flat-square&color=111111&label=stars" alt="Stars">
  <img src="https://img.shields.io/github/v/release/DietrichGebert/ponytail?style=flat-square&color=111111&label=release" alt="Release">
  <img src="https://img.shields.io/npm/v/@dietrichgebert/ponytail?style=flat-square&color=111111&label=npm" alt="npm">
  <img src="https://img.shields.io/badge/works%20with-20%20agents-111111?style=flat-square" alt="Works with 20 agents">
  <img src="https://img.shields.io/badge/license-MIT-111111?style=flat-square" alt="MIT license">
</p>

<p align="center">
  <a href="https://trendshift.io/repositories/50668" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/50668/daily" alt="DietrichGebert/ponytail | Trendshift" width="250" height="55"/></a>
  <a href="https://trendshift.io/repositories/50668" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/50668/weekly" alt="DietrichGebert/ponytail | Trendshift" width="250" height="55"/></a>
  <a href="https://trendshift.io/repositories/50668?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-50668" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/50668/monthly?language=JavaScript" alt="DietrichGebert%2Fponytail | Trendshift monthly ranking" width="250" height="55"/></a>
</p>

<p align="center">
  <img src="../assets/v5/hero-ja.jpg" width="880" alt="Ponytail 5、ゼロから作り直した：コード -53%、時間 -41%、コスト -26%、トークン -45%。それでもリスクのあるロジックの 98% にテストが付く。Ponytail なしでは 68%。">
</p>

<p align="center">
  <strong>Ponytail 5：ゼロから作り直した。</strong><br>
  <strong>コード -53% &middot; 時間 -41% &middot; コスト -26% &middot; トークン -45%</strong><br>
  <strong>それでも：リスクのあるロジックの 98% にテストが付く。</strong>Ponytail なしでは 68%。<br>
  <sub>Claude Code でベンチマーク。同じエージェントを skill あり・なしで比較：実際の FastAPI + React リポジトリを含む 39 タスク、Opus 5.5、各 5 回実行。<a href="#numbers">詳細</a>。</sub>
</p>

<p align="center">
  <sub><a href="../README.md">English</a> &middot; <a href="README.es.md">Español</a> &middot; <a href="README.ko.md">한국어</a> &middot; <a href="README.zh-CN.md">简体中文</a> &middot; 日本語</sub><br>
  <sub>英語の README からの翻訳です。内容が異なる場合は<a href="../README.md">英語版</a>が正です。</sub>
</p>

---

<p align="center">
  <a href="https://ponytail.dev/soon"><img src="../assets/waitlist-banner-ja.png" alt="何かが近づいている。ウェイトリストに登録" width="760"></a>
</p>

## Ponytail で作られたもの

<a href="https://theretriever.app">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../assets/retriever-logo-dark.svg">
    <img src="../assets/retriever-logo-light.svg" height="128" alt="Retriever">
  </picture>
</a>
<a href="https://photoreunion.app/?ref=ponytail-gh">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../assets/photoreunion-logo-dark.svg">
    <img src="../assets/photoreunion-logo-light.svg" height="128" alt="PhotoReunion">
  </picture>
</a>

---

あの人を知っているはずだ。長いポニーテール。楕円の眼鏡。バージョン管理システムより長く会社にいる。五十行を見せると、黙って眺めて、それを一行に置き換える。

Ponytail は、その人をあなたの AI エージェントの中に入れる。

このスリム版は、トークンを削減する Ponytail のコア skill、起動フック、モード追跡、コードマップ、シンプルなモードバッジだけを残す。バンド、ボード、実行時統計、メトリクス台帳、CSV/webhook レポート、セッションのインポートは含まない。以下の数値は過去のオフラインベンチマークだ。

<a id="numbers"></a>
## 数字

<p align="center">
  <img src="../assets/v5/chart-ja.png" width="880" alt="skill なしのベースラインに対する割合。コード行数：Ponytail v4.13 52%、Ponytail 5 47%。出力トークン：57% と 55%。コスト：84% と 74%。時間：62% と 59%。">
</p>

<p align="center">
  <img src="../assets/v5/tests-ja.png" width="880" alt="コードは半分、それでもより良い：リスクのあるロジックの 98% にテストが付く（skill なし 68%）。エージェント自身のテストが、埋め込んだバグの 66% を捕まえる（skill なし 46%）。">
</p>

グラフに表れないことが二つある。ブラインド比較では、Ponytail 5 の返答が前の Ponytail の返答に 110 対 67 で勝った。そしてセキュリティの 6 タスク（SQL インジェクション、パストラバーサル、偽造トークン、レート制限、不正な CSV 行、キャッシュ）では、全 30 回の実行に合格した。コードは少なく、安全性は落ちない。手法、タスクごとの表、制約：[benchmarks/results/2026-10-07-agentic.md](../benchmarks/results/2026-10-07-agentic.md)。

**ルールは一度も「トークンを最小に」ではなかった。**ルールはこうだ：タスクに必要なものだけを書き、検証、エラー処理、セキュリティ、アクセシビリティは決して削らない。コードが小さくなるのは必要な分だけだからであって、無理に詰めたからではない。コストとレイテンシの低下は副次的な効果だ。

## ビフォー / アフター

<p align="center">
  <img src="../assets/v5/beforeafter-ja.png" width="880" alt="フロントエンドに日付ピッカーを追加する。skill なし：335 行、カレンダーと日付ピッカーを手作り。Ponytail 5：リポジトリの Input を type date で再利用する 10 行のファイル一つ。カレンダーはブラウザが用意する。">
</p>

日付ピッカーを頼む。Ponytail なしだと、エージェントは日付ピッカーのライブラリをインストールするか、カレンダーを丸ごと手で作る。335 行。Ponytail 5 はまず、すでにあるものを見る。リポジトリには `Input` コンポーネントがあり、どのブラウザにも日付ピッカーがある。その二つを組み合わせる。10 行。

生き残った例は [examples/](../examples/) にもっとある。

## 仕組み

<p align="center">
  <img src="../assets/v5/ladder-ja.png" width="880" alt="コードを書く前に、最初に成り立つ段で止まる：1 それは本当に必要か、2 もうこのコードベースにあるか、3 標準ライブラリでできるか、4 プラットフォームの標準機能、5 インストール済みの依存関係、6 一行で済むか、7 そこで初めて動く最小限のコード。ロジックがあれば小さなテストを一つ。">
</p>

このはしごは問題を理解した*あと*に動く。理解の代わりではない。変更が触れるコードを読み、実際の流れを追ってから段を選ぶ。解決策には怠けるが、読むことには決して怠けない。

怠け者だが、いい加減ではない。信頼境界での入力検証、データ損失への対処、セキュリティ、アクセシビリティは決して削らない。

分岐、ループ、パーサー、お金、セキュリティを含むロジックには、小さなテストを一つ残す。返答の最後には必ず、省いたことや確認していないこと、知っておくべきリスクが書かれる。

## プロンプト

Ponytail はひとつのプロンプトだ：[`skills/ponytail/SKILL.md`](../skills/ponytail/SKILL.md)。ルールファイルを読むエージェント向けの短縮版は [`AGENTS.md`](../AGENTS.md)。このリポジトリの残りは、すべてそのプロンプトをいろいろなエージェントに読み込ませるためのものだ。

## インストール

**Claude Code**、二つのプロンプトに分けて：

```
/plugin marketplace add DietrichGebert/ponytail
```
```
/plugin install ponytail@ponytail
```

**Codex：**

```bash
codex plugin marketplace add DietrichGebert/ponytail
codex plugin add ponytail@ponytail
```

そのあと Codex で `/hooks` を開き、二つのライフサイクルフックを信頼して、新しいスレッドを始める。

**その他のエージェント：**[`AGENTS.md`](../AGENTS.md) をプロジェクトにコピーするか、エージェントに [`skills/ponytail/SKILL.md`](../skills/ponytail/SKILL.md) を skill としてインストールするよう頼む。Copilot、Cursor、OpenCode、Gemini などの手順（英語）：**[INSTALL.md](../INSTALL.md)**。

これで終わり。彼なら満足するだろう。口には出さないが。

毎セッション有効で、モードを切り替えられる（[コマンド](#commands)を参照）。`/ponytail ultra` は、コードベースに個人的に腹が立ったとき用だ。起動時とモード切り替え時に、現在のモードが表示される。

ponytail は GitHub の `DietrichGebert/ponytail` か npm の `@dietrichgebert/ponytail` からだけインストールすること。`.exe` や `.dll` ファイルは決して含まれない。それを含むコピーは私のものではない。

<a id="commands"></a>
## コマンド

| コマンド | 内容 |
|----------|------|
| `/ponytail [lite \| full \| ultra \| off]` | 強度を設定するか、オフにする。引数なしの場合、オフならデフォルトのレベルでオンにし、オンなら現在のレベルを表示する。 |
| `/ponytail default <lite \| full \| ultra \| off>` | モードを永続的に追跡するホストで、新しいセッションのデフォルトレベルを設定する。 |

コマンドには skill に対応したホストが必要だ（Claude Code、Codex、Devin CLI、OpenCode、Gemini、Antigravity CLI、pi、Hermes Agent、Qoder、Grok Build）。Codex CLI と IDE 拡張では、プラグインの名前空間の下にある skill なので、`$ponytail:ponytail` のように呼び出す。[フック](../INSTALL.md#cursor)を使う Cursor では `/ponytail` のレベル切り替えだけが使え、普通のメッセージとして入力する。指示だけのアダプター（Cursor のルールファイル、Windsurf、Cline、Copilot、Kiro、Antigravity の `AGENTS.md` フォールバック）は、コマンドなしで常時有効なルールだけを読み込む。

## よくある質問

**設定ファイルは必要？**
いらない。任意の `~/.config/ponytail/config.json` か環境変数 `PONYTAIL_DEFAULT_MODE` でデフォルトのレベルを設定できるが、必須のものはない。

**なぜ `shortcut:` コメントを書くの？**
意図的な近道と、いつ見直すかを示すため。別の単語にしたい、あるいは書かせたくない？ プロジェクトの `CLAUDE.md` か `AGENTS.md` にそう書けばいい。

**120 行のキャッシュクラスが本当に必要だったら？**
必要ない。それでも言い張れば作ってくれる。ゆっくり。正確に。あなたを見つめながら。

**スケールする？**
書かなかったコードは無限にスケールする。バグ 0、CVE 0、太古の昔から稼働率 100%。

**なぜ「ponytail」？**
理由はよくわかっているはずだ。

## スポンサー

<p align="center">
  <a href="https://greenpt.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="../assets/logo-greenpt-dark.svg">
      <img src="../assets/logo-greenpt.svg" width="260" alt="GreenPT">
    </picture>
  </a>
</p>

## ライセンス

[MIT](../LICENSE)。動く中でいちばん短いライセンス。

## スター履歴

<a href="https://www.star-history.com/dietrichgebert/ponytail#history">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=DietrichGebert/ponytail&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=DietrichGebert/ponytail&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=DietrichGebert/ponytail&type=Date" />
 </picture>
</a>
