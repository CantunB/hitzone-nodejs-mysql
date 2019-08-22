const express = require('express');
const router = express.Router();

const controlController = require('../controllers/controlController');
 /*    router.get('/', (req, res ) => {
    res.send('Hello world HITZONE ');
});  */
router.get('/', controlController.view);
router.post('/create/add', controlController.save);

module.exports = router;