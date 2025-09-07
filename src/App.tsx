import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Components/Hero/Hero";
import PostsList from "./Components/Posts/PostList";
import Features from "./Components/Features/Features";
import Contact from "./Components/Contact/Contact";
import Post from "./pages/Post";

export default function App() {
  return (
    <Router>
      {/* Material UI global reset */}
      <CssBaseline />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <Container maxWidth="lg" component="main">
              <Hero />
              <PostsList />
              <Features />
              <Contact />
            </Container>
          }
        />

        {/* Dynamic post page */}
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>
    </Router>
  );
}
