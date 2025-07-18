import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import {
  Home,
  LoginPage,
  RegisterPage,
  SkillsPage,
  UploadCVPage,
} from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ParticlesBackground from "./components/ParticlesBackground"; // ✅ import

const theme = createTheme({
  typography: {
    fontFamily: '"Exo 2", "Rajdhani", sans-serif',
    h4: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      letterSpacing: "0.05em",
    },
    h6: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 400,
      letterSpacing: "0.1em",
    },
    body1: {
      fontFamily: '"Rajdhani", sans-serif',
    },
    button: {
      fontFamily: '"Audiowide", cursive',
      textTransform: "none",
    },
  },
  palette: {
    primary: { main: "#4f46e5" },
    secondary: { main: "#0ea5e9" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ParticlesBackground /> ✅
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          sx={{
            backgroundColor: "transparent", // Pozadina sada transparentna zbog Particles
          }}
        >
          <AppBar
            position="static"
            sx={{ backgroundColor: "#1f1c2c", boxShadow: "none" }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                Career Navigator AI
              </Typography>
              <Typography variant="h6" sx={{ color: "#ddd" }}>
                Welcome, Guest
              </Typography>
              <Box>
                <Button component={Link} to="/login" sx={{ color: "#ddd" }}>
                  Login
                </Button>
                <Button component={Link} to="/register" sx={{ color: "#ddd" }}>
                  Register
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/upload-cv" element={<UploadCVPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Box>

          <Box
            component="footer"
            textAlign="center"
            py={2}
            sx={{ backgroundColor: "#f5f5f5" }}
            zIndex={1}
          >
            <Typography variant="caption">
              &copy; {new Date().getFullYear()} Career Navigator AI. All rights
              reserved.
            </Typography>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
