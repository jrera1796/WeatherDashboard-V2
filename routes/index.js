const express = require('express');
const router = express.Router();

router.use(require('./weather'));

module.exports = router;