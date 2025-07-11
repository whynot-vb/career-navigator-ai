import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ flex: 1, mt: 6, mb: 6 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" gutterBottom>
          Discover your ideal career path
        </Typography>
        <Typography variant="body1" paragraph>
          Use AI to match your skills and experience with the best
          opportunities.
        </Typography>
        <Button variant="contained" size="large">
          Get Started
        </Button>
      </Box>

      <Grid container spacing={4} alignItems="stretch">
        {/* Skills Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Link
            to="/skills"
            style={{
              textDecoration: "none",
              display: "block",
              height: "100%",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ color: "text.primary", fontWeight: 600 }}
                >
                  Enter Skills & Interests
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Use a guided form to input your skills.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Upload CV Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Link
            to="/upload-cv"
            style={{
              textDecoration: "none",
              display: "block",
              height: "100%",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ color: "text.primary", fontWeight: 600 }}
                >
                  Upload Your CV
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Upload your CV for parsing and analysis.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Recommendations Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                Career Recommendations
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Receive personalized suggestions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
