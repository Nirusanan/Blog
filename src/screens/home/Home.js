import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Themeswitch from "../../components/switch/Themeswitch";
// import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useFetchCollection } from "../../hooks/useFetchCollection";



export default function Home() {
  
  const {documents: posts} = useFetchCollection("posts")


  return (
    <div>
      <Navbar />
      <Themeswitch />
      <div className="container out">
        {posts &&
          posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
      </div>
    </div>
  );
}
