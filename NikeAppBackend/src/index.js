const express = require("express");
const productRouter = require("./router/productRoutes");
const orderRouter = require("./router/orderRoutes");
const app = express();
const PORT = 3000;

app.use('/products', productRouter)
app.use('/orders', orderRouter)

app.get("/", (req, res) => {
  res.send("<h2>Hello World!</h2>");
});
app.listen(PORT, () => {
  console.log(`Api Iniciada na porta ${PORT} `);
});
