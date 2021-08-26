 const express =require('express')
const mysql = require('mysql')
const {check, validationResult} =require('express-validator')
const app= express()
 const port =  4000
// const urlencoded = express.urlencoded({ extended:false});
 app.use(express.json())
// const query = require ("./database");
 const controllers = require("./controllers/index") 
const validators = require("./validators")
// const pool = mysql.createPool({
//     connectionLimit :10,
//         host : 'localhost',
//         user: 'root',
//         password: '',
//         database:'crud'
//     })


//routes
app.post("/create",validators.validate("createUser") , controllers.create);
app.delete("/" ,controllers.delete);
app.put("/",validators.validate("updateUser") ,controllers.update);
app.get("/list", controllers.list);


app.listen(port, () => console.log(`Listen on port ${port}`)) 


module.exports = app;