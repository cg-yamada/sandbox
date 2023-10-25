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

- NFT ミントとは？
  日本語に訳すと「 鋳造」であり、NFT ミントとは「NFT を新たに発行する」こと。
  具体的に説明すると、オリジナル画像やイラストのアセットデータをブロックチェーン上のアドレスと紐付けを行うことである。
  この紐付け処理を行なっているのが「スマートコントラクト」である。
  NFT する方法としては以下の２つがある。
- 独自コントラクトアドレスを用いて NFT ミントを行う
- OpenSea のようなマーケットプレイスが用意しているコントラクトアドレスを用いて NFT ミントを行う
