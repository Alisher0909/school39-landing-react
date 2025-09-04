import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import React from "react";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [slug]);

  return (
    <Box sx={{ py: 6, px: 2, maxWidth: "800px", mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        {slug}
      </Typography>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Box>
  );
}
