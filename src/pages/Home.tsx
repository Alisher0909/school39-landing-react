import React from "react";
import { Container, Box } from "@mui/material";
import Hero from "../Components/Hero/Hero";
import PostsList from "../Components/Posts/PostList";
import Features from "../Components/Features/Features";
import Contact from "../Components/Contact/Contact";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero section - full width */}
      <Hero />

      {/* Other sections inside container */}
      <Container maxWidth="lg">
        <Box component="section">
          <PostsList />
        </Box>

        <Box component="section">
          <Features />
        </Box>

        <Box component="section">
          <Contact />
        </Box>
      </Container>
    </>
  );
};

export default Home;
