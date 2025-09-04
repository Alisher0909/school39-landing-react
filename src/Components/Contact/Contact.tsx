import { Box, Typography, Link } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 6, px: 2 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
        Bog‘lanish
      </Typography>
      <Typography textAlign="center">
        📍 Manzil: Toshkent shahri, Chilonzor tumani, 39-maktab
      </Typography>
      <Typography textAlign="center">
        📞 Telefon: <Link href="tel:+998901234567">+998 90 123 45 67</Link>
      </Typography>
      <Typography textAlign="center">
        📧 Email: <Link href="mailto:info@school39.uz">info@school39.uz</Link>
      </Typography>
      <Box mt={3} textAlign="center">
        <iframe
          src="https://yandex.uz/map-widget/v1/-/CCUq5SPh"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}
