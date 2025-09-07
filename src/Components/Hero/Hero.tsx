import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        px: 2,
      }}
    >
      {/* Sarlavha animatsiya bilan */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          component="h1"
          variant="h2"
          fontWeight="bold"
          sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
        >
          Bizning Maktabimizga Xush Kelibsiz
        </Typography>
      </motion.div>

      {/* Tagline animatsiya bilan */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography
          variant="h6"
          mt={2}
          sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
        >
          Ta’lim – kelajak kaliti
        </Typography>
      </motion.div>

      {/* Tugma animatsiya bilan */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4 }}
          href="#posts"
        >
          So‘nggi Yangiliklar
        </Button>
      </motion.div>
    </Box>
  );
}
