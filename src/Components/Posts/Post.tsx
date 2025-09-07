import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import {
  getCachedData,
  setCachedData,
  CACHE_KEYS,
  getImageUrl,
} from "../../utils/storage";
import React from "react";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
}

function PostRenderer() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);

        // cache check
        const cachedPost = getCachedData<Post>(CACHE_KEYS.POST_METADATA + slug);
        const cachedContent = getCachedData<string>(
          CACHE_KEYS.POST_CONTENT + slug
        );

        if (cachedPost && cachedContent) {
          setPost(cachedPost);
          setContent(cachedContent);
          setLoading(false);
          return;
        }

        // fetch metadata
        const postsResponse = await fetch("/posts/posts.json");
        if (!postsResponse.ok) throw new Error("Failed to fetch posts metadata");

        const posts: Post[] = await postsResponse.json();
        const currentPost = posts.find((p) => p.slug === slug);

        if (!currentPost) {
          setError("Post topilmadi");
          return;
        }

        const postWithFixedImage = {
          ...currentPost,
          thumbnail: getImageUrl(currentPost.thumbnail),
        };

        setPost(postWithFixedImage);
        setCachedData(CACHE_KEYS.POST_METADATA + slug, postWithFixedImage);

        // fetch content
        const contentResponse = await fetch(`/posts/${slug}.md`);
        if (!contentResponse.ok) {
          setError("Post kontenti topilmadi");
          return;
        }

        const markdownContent = await contentResponse.text();
        setContent(markdownContent);
        setCachedData(CACHE_KEYS.POST_CONTENT + slug, markdownContent);
      } catch (err) {
        console.error(err);
        setError("Post yuklanmadi");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ];
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Post yuklanmoqda...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button component={Link} to="/" variant="contained">
          Bosh sahifaga qaytish
        </Button>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="warning" sx={{ mb: 2 }}>
          Post topilmadi
        </Alert>
        <Button component={Link} to="/" variant="contained">
          Bosh sahifaga qaytish
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="text"
          sx={{
            color: "text.secondary",
            "&:hover": { color: "primary.main", backgroundColor: "transparent" },
          }}
        >
          ← Bosh sahifaga qaytish
        </Button>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {formatDate(post.date)}
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        {post.thumbnail && (
          <Box sx={{ mb: 6 }}>
            <img
              src={post.thumbnail}
              alt={post.title}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </Box>
        )}

        <Box
          sx={{
            "& h1": { fontSize: "2rem", fontWeight: 500, mb: 2 },
            "& p": { mb: 2.5, lineHeight: 1.8, fontSize: "1.1rem" },
          }}
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </Box>
      </Box>
    </Container>
  );
}

export default PostRenderer;