import React from "react";
import Post from "../../components/post/Post";
import "./Home.css";
import { useFetchCollection } from "../../hooks/useFetchCollection";



export default function Home() {
  
  const {documents: posts} = useFetchCollection("posts")


  return (
      <div className="container out">
        {posts &&
          posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
      </div>
  );
}
