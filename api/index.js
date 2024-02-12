const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
const app = express();
const port = 3000 || process.env.PORT;

const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:5173"
        : "https://florian-hiso.netlify.app",
  })
); // Enable all CORS requests

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/blogs", db.getBlogs);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
