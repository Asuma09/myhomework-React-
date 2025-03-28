import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import Header from './Header';
import Body from './Body';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error("Error:", error));
  }, []);

  // いいね追加
  const handleLike = (postId) => {
    fetch(`http://localhost:3000/posts/${postId}/likes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: 1 }) // 仮のユーザーID
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setPosts(posts.map(post =>
          post.id === postId ? { ...post, likes_count: data.likes_count } : post
        ));
      }
    });
  };

  return (
    <div>
      <Header />
      <Body />
      <div className='post'>
        <h1>投稿一覧</h1>
        <ul>
          {posts.map(post => (
            <div key={post.id}>
              <div className='post-list'>
                <li>
                  <h2>{post.title}</h2>
                  
                  {/* 詳細ページへのリンク */}
                  <Link to={`/posts/${post.id}`}>詳細を見る</Link>

                  {/* いいねボタン */}
                  <button className="like-button" onClick={() => handleLike(post.id)}>
                    ❤️ {post.likes_count} いいね
                  </button>
                </li>
              </div>
              <div className='border'></div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
