import { Container, Box } from "@mui/material";
import { SkillsForm } from "../components";

const SkillsPage = () => {
  return (
    <Container maxWidth="md" sx={{ my: 6 }}>
      <Box>
        <SkillsForm />
      </Box>
    </Container>
  );
};

export default SkillsPage;
