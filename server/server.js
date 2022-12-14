const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
