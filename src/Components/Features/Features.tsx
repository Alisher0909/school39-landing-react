import React from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ComputerIcon from "@mui/icons-material/Computer";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SecurityIcon from "@mui/icons-material/Security";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const features = [
  { title: "Yangi sport majmuasi", icon: <FitnessCenterIcon fontSize="large" color="primary" /> },
  { title: "Zamonaviy kutubxona", icon: <LibraryBooksIcon fontSize="large" color="primary" /> },
  { title: "Ingliz tili qo‘shimcha darslari", icon: <SchoolIcon fontSize="large" color="primary" /> },
  { title: "IT laboratoriya", icon: <ComputerIcon fontSize="large" color="primary" /> },
  { title: "Xavfsizlik zonasi", icon: <SecurityIcon fontSize="large" color="primary" /> },
  { title: "Futbol maydoni", icon: <SportsSoccerIcon fontSize="large" color="primary" /> },
  { title: "Basketbol zali", icon: <SportsBasketballIcon fontSize="large" color="primary" /> },
  { title: "Musiqa xonasi", icon: <MusicNoteIcon fontSize="large" color="primary" /> },
];

export default function Features() {
  return (
    <Box id="features" sx={{ py: 6, px: 2, backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h4"
        component="h2"
        textAlign="center"
        fontWeight="bold"
        mb={4}
      >
        Maktab Imkoniyatlari
      </Typography>

      <Grid container spacing={3}>
        {features.map((f, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
              >
                {f.icon}
                <Typography mt={1} fontWeight="medium">
                  {f.title}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
