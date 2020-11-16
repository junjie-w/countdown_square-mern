import express from "express";
import mongoose from "mongoose";
import Card from "./models/timerCard.js";
import Cors from "cors";
//require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const connection_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q6bah.mongodb.net/countdowndb?retryWrites=true&w=majority`

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, (err) => {
  if (err) throw err;
  console.log("DB Connected Successfully");
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
  //console.log("hello");

  Card.find({}, {
    userToken: 0,
    userName: 0,
  }, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

//app.get('/user/:displayName', (req, res) => {

//})

//app.delete('/countdown/:timerId', (req, res) => {
//  console.log("reqqq", req.body)
//  console.log("paramsssss", req.params.timerId);
//  const timerId = req.params.timerId;
//  Card.findOneAndDelete({ timerId: timerId }, (err) => {
//    if (err) {
//      res.send(err)
//    } else {
//      res.send("deleted");
//    }
//  });
//})

app.delete('/timer/:id', (req, res) => {
  console.log("reqqq", req.params.id)
  const id = req.params.id
  //console.log("paramsssss", req.params.timerId);
  //const timerId = req.params.timerId;
  Card.findByIdAndDelete(id, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.send("deleted");
    }
    //res.redirect('back');
  });
})

//app.delete('/timer/:timerId', (req, res) => {
//  console.log("reqqq", req.params.timerId)
//  const timerId = req.params.timerId
//  //console.log("paramsssss", req.params.timerId);
//  //const timerId = req.params.timerId;
//  Card.findOneAndDelete({ timerId: timerId }, (err) => {
//    if (err) {
//      res.send(err)
//    } else {
//      res.send("deleted");
//    }
//    //res.redirect('back');
//  });
//})

app.patch('/user/:timerId', (req, res) => {
  console.log("timerId>>>", req.params.timerId)
  //console.log("reqbody>>>", req.body)
  const timerId = req.params.timerId;
  const userName = req.body.userName;
  //console.log(timerId)
  const token = req.body.token;
  const userEmail = req.body.userEmail;
  console.log("reqbodyyy", req.body)
  Card.findOneAndUpdate({ timerId: timerId }, { userToken: token, userName: userName, userEmail: userEmail }, { new: true },
    (err, data) => {
      console.log("doc", data);
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send(data)
      }
    }
  );

  //res.send(req.body)

  //Card.findByIdAndUpdate(id, {userToken: req})
})

app.listen(port, () => console.log(`listening on localhost: ${port}`))