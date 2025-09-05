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

  useEffect(() => {
    fetch("/posts/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Box id="posts" sx={{ py: 6, px: 2 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
        Maktab Yangiliklari
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.slug}>
            <Card>
              <CardMedia component="img" height="200" image={post.image} />
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