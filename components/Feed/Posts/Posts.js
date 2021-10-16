import { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../../../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImage}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
