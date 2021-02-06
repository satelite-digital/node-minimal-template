const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;
const passport = require('passport');

const appService = require('../services/app');

const router = express();


router.use((req, res, next) => {
  const token = req.headers['authorization'];

  jwt.verify(token, JWT_KEY, function (err, data) {
      if (err) {
          res.status(401).send({ error: "NotAuthorized" })
      } else {
          req.user = data;
          next();
      }
  })
})

router.get('/', async (req, res) => {
  app = await appService.findAll()
  res.send(app);
})

router.get('/:id', async (req, res) => {
  app = await appService.findById(req.params.id)
  res.send(app);
})

router.post('/', async (req, res) =>{
  new = await appService.create(req.body)
  res.send(new)
})

router.put('/:id', async (req, res) =>{
  updated = await appService.update(req.params.id, req.body)
  res.send({ updated : true, id : req.params.id})
})

router.delete('/:id', async (req, res) =>{
  deleted = await appService.delete(req.params.id)
  res.send({ deleted : true, id : req.params.id})
})

module.exports = router