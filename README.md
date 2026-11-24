# 投稿アプリ フロントエンド（myhomework-React-）

> **授業課題（学習目的）** — フロントエンドとバックエンドを別リポジトリに分け、REST API 経由で連携させる構成を学ぶために作ったもの。
> バックエンド: **[myhomework-Rails](https://github.com/Asuma09/myhomework-Rails)**

投稿の一覧・詳細・作成・編集といいねを行う画面。Rails 側の JSON API を `fetch` で呼ぶ。

**React 19 / Vite / react-router-dom**

---

## 学んだこと

### API との通信を自分で書く

データ取得・更新のライブラリを使わず、`fetch` を直接書いた。通信の流れを自分で追うことがこの課題の目的だったため。

```js
fetch("http://localhost:3000/posts")
```

### いいねの反映を楽観的に行う

いいねを押したときは、API のレスポンスを待って一覧を再取得するのではなく、**ローカルの state の `likes_count` を直接足している**。

```js
const handleLike = async (postId) => {
  await fetch(`http://localhost:3000/posts/${postId}/likes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: 1 }),
  });
  // 一覧を再取得せず、該当の投稿のカウントだけ更新する
};
```

一覧全体を取り直すと画面がちらつくうえ、通信量も無駄になる。更新された1件だけを state に反映するほうが体感が速いことを実際に比べて確かめた。

### 画面遷移

`react-router-dom` でページを分け、一覧から詳細へはパスパラメータで渡している。

```jsx
<Link to={`/posts/${post.id}`}>詳細を見る</Link>
```

| 画面 | 内容 |
| --- | --- |
| `Home.jsx` | 投稿一覧といいね |
| `Detailpage.jsx` | 投稿の詳細 |
| `Submitpage.jsx` | 新規投稿 |
| `Editpage.jsx` | 投稿の編集 |

## セットアップ

先に `myhomework-Rails` を `rails s`（`http://localhost:3000`）で起動しておく。

```bash
npm install
npm run dev
```

## 制約

- **授業課題として作ったものなので、ログイン機能が未完成。** いいねの `user_id` は `1` を固定で送っている（本来はログイン中のユーザー ID を使う箇所）
- API の URL が `http://localhost:3000` のままコードに書かれており、環境変数に出していない。デプロイするなら最初に直すべき箇所
- `body.jsx` は空のスタブが残っている
