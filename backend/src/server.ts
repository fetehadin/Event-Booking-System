import "dotenv/config"; // Loads your .env file immediately
import app from "./app.js"; // Imports the configured Express app

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});