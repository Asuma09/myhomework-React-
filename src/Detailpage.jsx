import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./Detailpage.css";
import Header from './Header';
import Body from './Body';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error("Error:", error));
  }, [id]);

  // 削除処理
  const handleDelete = () => {
    if (window.confirm("本当に削除しますか？")) {
      fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      })
      .then(() => {
        alert("削除しました");
        navigate("/");  // ←一覧に戻る
      })
      .catch(error => console.error("Error:", error));
    }
  };

  if (!post) return <p>読み込み中...</p>;

  return (
    <div>
      <Header />
      <Body />
      <div className='post'>
      <h1>{post.title}</h1>
      <p className='text'>{post.content}</p>
      <p className='username'>投稿者: {post.username}</p>

      <div className='button'>
      <button onClick={() => navigate(`/posts/${id}/edit`)}>編集</button>

      
      <button onClick={handleDelete}>削除</button>
      </div>
      </div>
    </div>
  );
}

export default DetailPage;