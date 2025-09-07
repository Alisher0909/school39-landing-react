import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import React from "react";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setError(null);

    fetch(`/posts/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Maqola topilmadi");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="body1" mt={2}>
          Maqola yuklanmoqda...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          ❌ Xatolik: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 6, px: 2, maxWidth: "800px", mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        {slug?.replace(/-/g, " ")}
      </Typography>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Box>
  );
}
