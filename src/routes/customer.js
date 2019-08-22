const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
/* router.get('/', (req, res ) => {
    res.send('Hello world HITZONE ');
}); */

 router.get('/', customerController.list);
 router.get('/create', customerController.create);
router.post('/create/add', customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update); 

module.exports = router;