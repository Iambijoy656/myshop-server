const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

//midleware
app.use(cors());
app.use(express.json());

//myShop
//vJg4*Ut@#bBi6bm

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.iyuahvh.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const allHomeCollection = client.db("rentHome").collection("allHomes");
    const usersCollection = client.db("rentHome").collection("users");
  } finally {
  }
}
run().catch(console.log);

app.get("/", (req, res) => {
  res.send("my shop server is running");
});

app.listen(port, () => {
  console.log(`my shop server is running on ${port}`);
});
