import express from "express";
import mongoose from "mongoose";
import Card from "./models/timerCard.js";
import Cors from "cors";

const app = express();
const port = process.env.PORT || 8000;
const connection_url = 'mongodb+srv://admin:echobrooke@cluster0.q6bah.mongodb.net/countdowndb?retryWrites=true&w=majority'

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

app.get('/', (req, res) => res.status(200).send("Hello"));

app.post('/countdown/public', (req, res) => {
  const timerCard = req.body;
  console.log(req.body)
  Card.create(timerCard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
});

app.get('/countdown/public', (req, res) => {
  console.log("hello");

  Card.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.listen(port, () => console.log(`listening on localhost: ${port}`))