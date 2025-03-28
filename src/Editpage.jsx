import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Body from './Body';
import "./Editpage.css";
function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    content: ""
  });

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then(response => response.json())
      .then(data => setFormData(data))
      .catch(error => console.error("Error:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: formData })
    })
    .then(response => response.json())
    .then(() => {
      alert("更新しました");
      navigate(`/posts/${id}`); // 詳細ページに戻る
    })
    .catch(error => console.error("Error:", error));
  };

  return (
    <div>
    <Header />
    <Body />
    <form onSubmit={handleSubmit}>
    
      <div className='post'>
      <div>
        <label>ユーザーネーム:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label>タイトル:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label>本文:</label>
        <textarea name="content" value={formData.content} onChange={handleChange}></textarea>
      </div>
      <button type="submit">更新</button>
      </div>
    </form>
</div>
    
  );
}

export default EditPage;
