const controller = {};
const moment = require('moment');

controller.list =(req, res) =>{
    /* res.send('HITZONE'); */
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customer ', (err, customers) =>{
            if (err) {
                res.json(err);
            }
            console.log(customers);
            res.render('./customers/customers',{   //aqui se renderiza la vista customers 
                data: customers
            });
        });
    });
};

controller.create =(req, res) =>{
    req.getConnection((err, conn)=>{
    res.render('./customers/customers_create', {moment:moment});
});
};

controller.save = (req, res ) => {
   console.log (req.body);
   // res.send('works')
   const data = req.body
   req.getConnection((err, conn) => {
       conn.query('INSERT INTO  customer set ?', [data], (err, customer) =>{
        console.log(customer);
         res.redirect('/customers');
       });
   })
}
controller.edit = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer)=> {
            console.log(customer);
            res.render('./customers/customer_edit', {
                data: customer[0]
            });
        }) 
    });
};
controller.update = (req, res) =>{
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err,rows) =>{
             res.redirect('/customers');
        });
    });
};


controller.delete = (req, res ) => {
    const { id } = req.params;
req.getConnection((err, conn) => {
    conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
         res.redirect('/customers');
    });
 }) 
};
module.exports = controller;