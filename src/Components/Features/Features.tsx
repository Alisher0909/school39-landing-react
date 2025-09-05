import { Box, Paper, Typography, Grid } from "@mui/material";
import React from "react";

const features = [
  "Yangi sport majmuasi",
  "Zamonaviy kutubxona",
  "Ingliz tili qo‘shimcha darslari",
  "IT laboratoriya",
  "Xavfsizlik zonasi",
  "Futbol maydoni",
  "Basketbol zali",
  "Musiqa xonasi",
];

export default function Features() {
  return (
    <Box id="features" sx={{ py: 6, px: 2, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
        Maktab Imkoniyatlari
      </Typography>
      <Grid container spacing={3}>
        {features.map((f, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Paper sx={{ p: 3, textAlign: "center" }}>
              <Typography>{f}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}