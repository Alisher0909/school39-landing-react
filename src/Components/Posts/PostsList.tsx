import { Box, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/posts/posts.json")
      .then((res) => {
        if (!res.ok) throw new Error("Ma'lumot yuklab bo‘lmadi");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box id="posts" sx={{ py: 6, px: 2, textAlign: "center" }}>
        <Typography variant="h6">⏳ Ma'lumot yuklanmoqda...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box id="posts" sx={{ py: 6, px: 2, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          ❌ Xatolik: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box id="posts" sx={{ py: 6, px: 2 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
        Maktab Yangiliklari
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.slug}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {post.date}
                </Typography>
                <Typography variant="body2">{post.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}