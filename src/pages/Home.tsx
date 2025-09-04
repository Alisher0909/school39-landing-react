import React from "react";
import { Container } from "@mui/material";
import Hero from "../Components/Hero";
import PostsList from "../Components/PostsList";
import Features from "../Components/Features";
import Contact from "../Components/Contact";

const Home: React.FC = () => {
  return (
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
  );
};

export default Home;
