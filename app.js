const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo DevOps 🚀");
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;