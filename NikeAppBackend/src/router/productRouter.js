const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Buscar todos os Produtos!')
})

router.get('/:productId', (req, res) => {
    res.send(`Buscar produto com id ${req.params.productId}`)
})

module.exports = router;
