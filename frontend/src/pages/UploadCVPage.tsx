import React, { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";

const UploadCVPage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select a file!");
    alert(`Uploaded file: ${file.name}`);
    // Ovde kasnije dodaješ API call za upload
  };

  return (
    <Container maxWidth="md" sx={{ my: 6 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Upload Your CV
        </Typography>

        <Button variant="outlined" component="label">
          {file ? file.name : "Select PDF file"}
          <input type="file" hidden accept=".pdf" onChange={handleFileChange} />
        </Button>

        <Box sx={{ mt: 3 }}>
          <Button variant="contained" type="submit">
            Upload
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UploadCVPage;
