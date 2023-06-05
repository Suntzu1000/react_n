const express = require("express");
const router = express.Router();
const { createOrder, getOrder } = require("../database/orders");

router.get("/:reference", (req, res) => {
    const router = 
  res.send(`Obtendo pedido com referência ${req.params.reference}`);
});

router.post("/", async (req, res) => {
  const orderData = req.body;
  orderData.ref = (Math.random() + 1).toString(36).substring(7);
  const newOrder = await createOrder(orderData);
  res.status(201).send({ status: "OK", data: newOrder });
});

module.exports = router;
