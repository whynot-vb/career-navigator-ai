import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
} from "@mui/material";

const skillsList = [
  "JavaScript",
  "React",
  "Python",
  "Data Science",
  "Java",
  "Node.js",
];

const SkillsForm = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}\nSkills: ${skills.join(", ")}`);
    // Ovde kasnije dodaješ API call
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 600, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>
        Enter your Skills & Interests
      </Typography>

      <TextField
        label="Your Name"
        fullWidth
        required
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Skills</InputLabel>
        <Select
          multiple
          value={skills}
          onChange={(e) => setSkills(e.target.value as string[])}
          input={<OutlinedInput label="Skills" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {skillsList.map((skill) => (
            <MenuItem key={skill} value={skill}>
              {skill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default SkillsForm;
