sandbox

```sh:
make up
make dev
```

#### ローカルに seaport-js をクローンして参照させる手順

```sh:
git clone https://github.com/cg-yamada/seaport-js.git
cd seaport-js
yarn link # このパッケージをグローバルに登録する
cd [your-project-directory]
yarn link @opensea/seaport-js # ローカルのseaport-jsを参照させる
```
