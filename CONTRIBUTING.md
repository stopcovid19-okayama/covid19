# プロジェクトへの参加方法

本プロジェクトに興味を持っていただきありがとうございます。

プロジェクトの責任者をしています、藤原と申します。

何か質問があれば、Issue へのコメントや、Slack 等でお気軽に質問してください。プロジェクトへの参加方法をお伝えいたします。

プロジェクトに参加する前に、本ドキュメントと[プロジェクトの行動規範](CODE_OF_CONDUCT.md) をご一読ください。

## プロジェクトの目的

本プロジェクトは、

- 新型コロナウイルスから岡山県にお住まいの方、岡山県に訪れる方の生命及び健康を守る
- 岡山県公式から発表される感染者情報を岡山県にお住まいの方、岡山県に訪れる方に迅速かつ正確でわかりやすく伝える
- オープンソースの仕組みを活用した開発体制を公開し、誰でも参加出来るようにする

を目指して運営しています。

なお、岡山県や政府以外からの情報は、本プロジェクトでは発信しないポリシーで運営しています。

## プロジェクト体制
本プロジェクトは以下の体制で運営しています。

サイトの制作・開発以外にも様々なタスクがございます。エンジニアやデザイナー以外の方の参加も大歓迎です。

- プロジェクト責任者
  - [Izuho Fujiwara](https://www.facebook.com/fujiwaraizuho1222)
- 開発チーム
  - 対策サイトの制作・開発
- 運用チーム
  - Twitter, Facebook等のSNSの運用
  - メディアへの発信
  - 行政との連携

機能やコンテンツの企画はメンバー全員が担当しています。

## ディスカッション
Slack でディスカッションを行っています。

サイトの制作・運用にご協力いただける方であれば誰でも参加可能です。[ここ](https://join.slack.com/t/okayama-stopcovid19/shared_invite/zt-d86r1ajq-ba1w0w71DGcX_fed6lufog) からご参加ください。

コミュニケーションにあたっては、[行動規範](https://github.com/stopcovid19-okayama/covid19/blob/development/CODE_OF_CONDUCT.md) もご確認ください。

## 対策サイト制作の流れ
対策サイトの制作は、Slack と GitHub を使用してオープンに進めております。

1. [Slack] 新機能やコンテンツに関する企画
2. [GitHub] 課題(Issue)の追加
3. [GitHub] 課題(Pull Request)の対応
4. [GitHub] 対策サイトへの反映(Merge)

## 課題管理
対応が必要なタスク、改善要望、不具合報告などの課題は GitHub の Issue で管理しています。

### 課題の登録について
- Issue の登録は誰でも可能です。必ず既に同様の Issue が無いか検索をしてから作成してください
- Issue へのコメントはご自由にどうぞ
- 新しい機能やコンテンツなど、要求が不明瞭な課題については、最初に Slack で相談するとスムーズに進行します

### 課題対応の流れ
1. 対応できそうで、誰も対応中でない Issue を探す
2. Issue に「やります！」等とコメントしてから開発を開始
3. 対応が完了したら Pull Request を送信
4. コミッターがレビューし問題なければマージします

### 注意事項
- 個人用の作業履歴など、不要なコミットはまとめてから Pull Request を送って下さい
- good first issue / help wanted / Fast / bug を優先して対応いただけると助かります
- improve(改善提案)がついたIssueについては必ず反映できると限りませんのでご了承ください（特にUI系について）
- わかりやすい簡単な修正をスポット的に行うだけであれば、自分のリポジトリに Fork をして、修正版を Pull Request いただいてもかまいません。
- 半日以上作業から離れそうな場合は、他の人が作業を引き継げるようにしておいてください。（Issue を抱えたまま長時間オフになると、そのIssueがブロックされてしまいます。）
- 1日以上更新されない Issue については、当方で assign を外させていただくことがあります。作業途中でも、[Draft Pull Request](https://qiita.com/tatane616/items/13da1b6797a7b871ad58) を送ってもらえると、動きが把握しやすくなります。
- Issue に関連した質問等は、Slack より Issue 内のコメントを活用しましょう

## コミッター
開発チームの以下のメンバーがコミッターとして、Pull Request のレビューやマージ、リリースを担当しています。

対策サイトの技術的な質問や相談は以下のメンバー宛てにお願いします。

- [Izuho Fujiwara](https://github.com/fujiwaraizuho)
- [manate](https://github.com/manate-anagram)
- [come25136](https://github.com/come25136)

## ブランチ運用について
- development: 開発用のブランチです
- dev-pages: 開発環境 (development) のコンテンツを格納するブランチです
- master: 本番用のブランチです
- production: 本番環境 (master)のコンテンツを格納するブランチです

## 各種環境とデプロイについて
本プロジェクトでは以下の環境が存在します。

サーバーには [さくらのクラウド](https://cloud.sakura.ad.jp/) と [Netlify](https://netlify.com/) を使用しています。

### development / 開発環境
[https://dev-covid19-okayama.netlify.com](https://dev-covid19-okayama.netlify.com)

最新の開発状況が反映される環境です。 

development ブランチを更新すると CI/CD が実行されサーバーのコンテンツを更新します。

### production / 本番環境
[https://okayama.stopcovid19.jp](https://okayama.stopcovid19.jp)

本番環境です。 

master ブランチを更新すると CI/CD が実行され production ブランチのコンテンツが更新されます。

さくらのクラウドでは5分に1回、productionブランチをPullしてコンテンツを更新しています。

## データ更新の作業手順
### 作業手順
- 毎時 0 分 / スクレイピングスクリプトが実行され、サイト用の JSON データが生成される
- 毎日 21:15 / 生成された JSON データを更新するための Pull Request が作成される
- 開発環境のデータと、[おかやまオープンデータカタログ](http://www.okayama-opendata.jp/opendata/ga120PreAction.action?keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48)のデータが同じか複数人で確認
- 問題なければ、コミッターの誰かがPull Requestをマージし、本番環境を更新する

### 注意事項
- Pull Requestをマージした際は、必ず結びついているブランチを削除してください
- データの整合性チェックは念入りに行ってください

## CONTRIBUTORS.md への追加について
ご協力いただいた皆様のお名前（ハンドルネーム）や役割を記す、[CONTRIBUTORS.md](https://github.com/stopcovid19-okayama/covid19/blob/development/CONTRIBUTORS.md) というファイルがあります。

何かしらの貢献を行った方は、ぜひこちらにもお名前をお載せください。

[#19](https://github.com/stopcovid19-okayama/covid19/issues/19) の Issue に、掲載名、リンク先（あれば）、役割をコメントください。
