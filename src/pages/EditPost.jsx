import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppWriteService from "../AppWrite/config";
import { Container, PostForm } from "../Components";

function EditPost() {
  const [posts, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      AppWriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);
  return posts ? (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
