const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
  /*   router.get('/', (req, res ) => {
    res.send('Hello world HITZONE ');
});  */
router.get('/', homeController.view);

module.exports = router;