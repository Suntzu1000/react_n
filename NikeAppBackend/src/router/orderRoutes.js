const express = require("express");
const router = express.Router();

router.get('/:reference', (req, res) => {
    res.send(`Obtendo pedido com referência ${req.params.reference}`)
});

router.post('/', (req, res) => {
    res.send('Criando um pedido')
})

module.exports = router;
