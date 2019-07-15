# Chrole

## ビルド環境構築
``` bash
# モジュールのインストール
$ yarn

# 開発用ローカルサーバーの起動 localhost:3000
$ yarn dev

# ビルド
$ yarn build
```
詳細については [Nuxt.js docs](https://nuxtjs.org) を参照

### ローカル開発環境

1. メンバーからswaggerのyamlファイルを共有してもらってください
2. [Swagger Editor](https://editor.swagger.io/) のeditorにyamlの中身を貼り付け
3. Swagger画面上部にあるGenerate Serverからnodejs-serverを選択
4. 下記を実行しブラウザ確認

```bash
# ダウンロードしたzipファイル内
$ yarn add cors

$ yarn start
```

## Gitルール

#### リポジトリモデル
- GitHub Flow

masterブランチからreleaseブランチを切って開発

#### ブランチ名
例： feature/components/comment-area

第１キーワード
- feature
- fix

第２キーワード
- common
- nuxt
- assets
- components
- layouts
- middleware
- pages
- plugins
- static
- store
- utils
- test
- config
- lib
- docs
- ci
- special

第３キーワード
- 修正/追加機能名

#### コミットルール
例： feat: コメントエリアを新規追加

```
feat: A new feature
fix: A bug fix
docs: Documentation only changes
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf: A code change that improves performance
test: Adding missing or correcting existing tests
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
```

引用元：https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type
