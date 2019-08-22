const controller = {};

    controller.view =(req, res) =>{ 
        req.getConnection((err, conn)=>{
            res.render('index');    


        });
};
module.exports = controller;