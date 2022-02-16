const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const Controller = require('./controller/contrl_index.js');

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/products', (req, res) => {
  Controller.getAllProducts(req, res);
});

app.get('/products/:product_id', (req, res) => {
  Controller.getOneProduct(req, res);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});