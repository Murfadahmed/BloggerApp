import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../Components";
import AppWriteService from "../AppWrite/config";

function AllPost() {
  const [posts, setPost] = useState([]);
  useEffect(() => {}, []);
  AppWriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPost(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((posts) => (
            <div key={posts.$id} className="p-2 w-1/4">
              <PostCard />
            </div>
          ))}
        </div>
          <h1 className="text-4xl text-center">allpost </h1>
      </Container>
    </div>
  );
}

export default AllPost;
