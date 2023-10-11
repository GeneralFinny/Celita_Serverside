const express = require("express");
const { spawn } = require("child_process");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "Front_End/index.html");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Run your Python Flask app
const pythonProcess = spawn("python", ["app.py"]);
pythonProcess.stdout.on("data", (data) => {
  console.log(data.toString());
});
