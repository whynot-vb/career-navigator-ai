import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Home, SkillsPage, UploadCVPage } from "./pages";

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Career Navigator AI
            </Typography>
            <Typography variant="body2">Welcome, Guest</Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/upload-cv" element={<UploadCVPage />} />{" "}
            {/* ✅ nova ruta */}
          </Routes>
        </Box>

        <Box component="footer" textAlign="center" py={2} bgcolor="#f5f5f5">
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} Career Navigator AI. All rights
            reserved.
          </Typography>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
