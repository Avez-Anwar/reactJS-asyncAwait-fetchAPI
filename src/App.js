import "./styles.css";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [post, setPost] = useState([]);
  const handleFetch = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
    } catch {
      console.log("There is an error in the API");
    }
  };
  console.log(setPost);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {post.map((posts) => {
        return <li key={posts.id}>{posts.title}</li>;
      })}
      <button onClick={handleFetch}>Fetch</button>
    </div>
  );
}
