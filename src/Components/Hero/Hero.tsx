import React from "react";
import { Box, Button, Typography } from "@mui/material";

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
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        Bizning Maktabimizga Xush Kelibsiz
      </Typography>
      <Typography variant="h6" mt={2}>
        Ta’lim – kelajak kaliti
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 4 }}
        href="#posts"
      >
        So‘nggi Yangiliklar
      </Button>
    </Box>
  );
}
