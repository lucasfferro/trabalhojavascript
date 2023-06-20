const { Router } = require('express');

const express = require('express');
const router = express.Router();

const Controller = require('./controllers/Controller');

router.get('/nome', Controller.nome);

module.exports = router;

