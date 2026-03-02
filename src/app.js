const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const routes = require("./routes/character.routes");

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})