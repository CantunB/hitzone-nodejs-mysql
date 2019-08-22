const controller = {};
const moment = require('moment');


controller.view = (req, res ) => {
    //res.send('Mensualidades desde el controller');
    req.getConnection((err, conn)=>{
        res.render('./control/pagos',{moment:moment});        
    });
};
controller.list =(req, res) =>{
    /* res.send('HITZONE'); */
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customer ', (err, customers) =>{
            if (err) {
                res.json(err);
            }
            //console.log(customers);
            res.render('./control/pagos',{   //aqui se renderiza la vista customers 
                data: customers
            });
        });
    });
};

controller.save = (req, res ) => {
    console.log (req.body);
    res.send('works')
   /*  const data = req.body
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO  customer set ?', [data], (err, customer) =>{
         console.log(customer);
          res.redirect('/customers');
        });
    }) */
 }
controller.search = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer)=> {
            console.log(customer);
            res.render('./control/pagos', {
                data: customer[0]
            });
        }) 
    });
};
module.exports = controller;