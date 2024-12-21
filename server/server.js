const express = require("express");
const ulist = require("./sample.json");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
app.get("/allusers", (req, res) => {
  return res.json(ulist);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
