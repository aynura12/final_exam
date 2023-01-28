const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { listen } = require("express/lib/application");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;
const productSheme = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("products", productSheme);

//get all products
app.get("/products", (req, res) => {
  Products.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

//delete product
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  Products.findByIdAndDelete(id, (err, docs) => {
    if (!err) {
      res.send("Product deleted!!!");
    } else {
      res.status(500).json({ message: err });
    }
  });
});

//add product
app.post("/products", (req, res) => {
  const product = new Products({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
  });
  product.save();
  res.send("Product added!!!");
});

const PORT = process.env.PORT;
const URL = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(URL, (err) => {
  if (!err) {
    console.log("DB CONNECTED");
    app.listen(PORT, () => {
      console.log("the server is up and running on the port:", PORT);
    });
  }
});
