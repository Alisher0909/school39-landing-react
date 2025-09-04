import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const Post: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (slug) {
      // markdown faylni public/posts papkadan yuklaymiz
      fetch(`/posts/${slug}.md`)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch(() => setContent("Post topilmadi."));
    }
  }, [slug]);

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom>
        Post
      </Typography>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
};

export default Post;
