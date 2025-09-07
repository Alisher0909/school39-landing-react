import {
  Box,
  Typography,
  Container,
  Paper,
  Link,
  Divider
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import {
  LocationOn,
  Email,
  Phone,
  AccessTime
} from '@mui/icons-material';
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <Box sx={{ py: 6, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6, color: 'primary.main' }}
        >
          Biz bilan bog'lanish
        </Typography>

        <Grid2 container spacing={2}>
          {/* Chap taraf */}
          <Grid2 xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                Aloqa ma'lumotlari
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Manzil
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Namangan viloyati, Uychi tumani,<br />
                      Amir Temur ko'chasi, 15-uy
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Telefon
                    </Typography>
                    <Link
                      href="tel:+998946357333"
                      variant="body1"
                      sx={{ textDecoration: 'none', color: 'primary.main' }}
                    >
                      +998 94 635 73 33
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Email
                    </Typography>
                    <Link
                      href="mailto:info@school39.uz"
                      variant="body1"
                      sx={{ textDecoration: 'none', color: 'primary.main' }}
                    >
                      info@school39.uz
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccessTime color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Ish vaqti
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Dushanba - Shanba: 08:00 - 17:00<br />
                      Yakshanba: Dam olish kuni
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid2>

          {/* O‘ng taraf */}
          <Grid2 xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                Maktab joylashuvi
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <iframe
                  src="https://yandex.com/map-widget/v1/-/CLQqJ6pk"
                  width="100%"
                  height="450"
                  style={{ border: 'none' }}
                  title="Maktab joylashuvi"
                ></iframe>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, textAlign: 'center' }}
              >
                Maktabimiz Uychi tumani markazida joylashgan bo'lib,
                transport vositalari bilan qulay yetib borish mumkin.
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default ContactSection;
