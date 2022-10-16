const express = require('express');
const router = express.Router();

router.get('/weather/:id', (req, res) =>{
  let string  = "Hello from string"
  // console.log(req, '\n')
  console.log(res.json(res.params))
});

module.exports = router;