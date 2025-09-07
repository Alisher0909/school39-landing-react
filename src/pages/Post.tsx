import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";

const Post: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetch(`/posts/${slug}.md`)
        .then((res) => {
          if (!res.ok) throw new Error("Post yuklab bo‘lmadi");
          return res.text();
        })
        .then((text) => {
          setContent(text);
          setError(null);
        })
        .catch((err) => {
          console.error(err);
          setError("❌ Post topilmadi yoki yuklab bo‘lmadi.");
        })
        .finally(() => setLoading(false));
    }
  }, [slug]);

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {loading ? (
        <Box textAlign="center">
          <CircularProgress />
          <Typography mt={2}>Yuklanmoqda...</Typography>
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <article>
          <Typography variant="h3" gutterBottom>
            {slug?.replace("-", " ")}
          </Typography>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      )}
    </Container>
  );
};

export default Post;