import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { whiteTheme } from "../assets/constants";

const UploadCVPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Molim te izaberi PDF fajl!");
      return;
    }

    // Show Notification
    setOpen(true);

    // TODO: Api call to upload the file
  };

  // Close the Snackbar after 3 seconds or when the user clicks x
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ my: 6 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom sx={whiteTheme}>
          Upload Your CV
        </Typography>

        <Button variant="outlined" component="label" sx={whiteTheme}>
          <Typography color="inherit" variant="h5" gutterBottom>
            {file ? file.name : "Izaberi PDF fajl"}
          </Typography>
          <input type="file" hidden accept=".pdf" onChange={handleFileChange} />
        </Button>

        <Box sx={{ mt: 3 }}>
          <Button variant="contained" type="submit">
            Upload
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000} // disapear after 3 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // top center
      >
        <Alert
          severity="info"
          variant="filled"
          onClose={handleClose}
          sx={{
            width: "100%",
            maxHeight: "100px",
            alignItems: "center",
          }}
        >
          Učitavanje u toku… Kada se završi, moći ćete da dobijete preporuke.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UploadCVPage;
