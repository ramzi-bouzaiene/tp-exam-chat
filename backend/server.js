import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let messages = [];

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  const { author, content } = req.body;

  const message = {
    author,
    content,
    time: new Date().toLocaleTimeString()
  };

  messages.push(message);

  res.json(message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});