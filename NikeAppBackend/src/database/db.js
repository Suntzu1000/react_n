const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://gabrielfootze:CbcfUELCiDXBLhgv@nikedb.olyxukx.mongodb.net/?retryWrites=true&w=majority";

let client;
const getDB = () => {
  if (!client) {
    client = new MongoClient(uri);
  } else {
    console.log("Meus ovos");
  }

  const database = client.db("teste01");
  const products = database.collection("produtos");
  const orders = database.collection("orders");

  return { products, orders };
};

module.exports = getDB;
