import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
