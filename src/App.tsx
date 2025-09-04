import { CssBaseline, Container } from "@mui/material";
import Hero from "./Components/Hero/Hero";
import PostsList from "./Components/Posts/PostsList";
import Features from "./Components/Features/Features";
import Contact from "./Components/Contact/Contact";
import React from "react";

export default function App() {
  return (
    <>
      {/* Material UI global reset */}
      <CssBaseline />

      <Container maxWidth="lg">
        {/* Hero section */}
        <Hero />

        {/* Posts section */}
        <PostsList />

        {/* Features section */}
        <Features />

        {/* Contact section */}
        <Contact />
      </Container>
    </>
  );
}
