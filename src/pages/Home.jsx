import React, { useEffect, useState } from "react";
import AppWriteService from "../AppWrite/config";
import { Container, PostCard } from "../Components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AppWriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
            <h1 className="text-2xl text-center">yahan post ayengi</h1>
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  return <div>Home</div>;
}

export default Home;
