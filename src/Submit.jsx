import { useState } from "react";
import "./Submit.css"


function Submit() {
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: formData })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      alert("投稿しました");
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="submit">
      <div className="submit-item">
        <label>ユーザーネーム:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label>タイトル:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label>本文:</label>
        <textarea name="content" value={formData.content} onChange={handleChange} className="text"></textarea>
      </div>
      <button type="submit">投稿</button>
    </form>
  );
}
export default Submit