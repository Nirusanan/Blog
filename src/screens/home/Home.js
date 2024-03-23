import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import "./Home.css";
import { useFetch } from "./../../hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";
import Themeswitch from "../../components/switch/Themeswitch";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";



export default function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() =>{
    const collectionRef = collection(db, "posts")

    getDocs(collectionRef)
      .then((snapshot) =>{
        let results = []

        snapshot.docs.forEach((doc)=>{
          results.push({...doc.data(), id:doc.id})
        })

        setPosts(results);
      })
      .catch((error) => console.log(error))
  }, []);

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
