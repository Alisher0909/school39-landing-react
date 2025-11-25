import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "../Components/MarkdownRenderer";
import { Box, CircularProgress } from "@mui/material";

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/posts/${slug}.md`);
        if (!response.ok) {
          throw new Error("Failed to load post");
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Error loading post:", error);
        setContent("# Post Not Found\nSorry, the requested post could not be found.");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <MarkdownRenderer content={content} />
    </Box>
  );
};

export default PostPage;
