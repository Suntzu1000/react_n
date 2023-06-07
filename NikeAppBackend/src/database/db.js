const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://gabrielfootze:I9AAbHQolKi5Fljo@nikeapp.7zpt8jp.mongodb.net/?retryWrites=true&w=majority";

let client;
const getDB = () => {
    if(!client) {
        client = new MongoClient(uri);
    }
  
  const database = client.db("teste01");
  const products = database.collection("products");
  const orders = database.collection("orders");

  return { products, orders };
};

module.exports = getDB;
