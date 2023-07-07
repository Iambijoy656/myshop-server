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
    const productsCollection = client.db("myShop").collection("products");
    const usersCollection = client.db("myShop").collection("users");



    //users  save database
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

        //get all products
        app.get("/allproducts", async (req, res) => {
          const id = req.params.id;
          const query = {};
          const details = await allHomeCollection.findOne(query);
          res.send(details);
        });


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
