const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://gabrielfootze:nObYujCMOtcFZJWa@nikeapp.7zpt8jp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db("teste01");
const products = database.collection("products");

module.exports = {
    products
}
