const { response } = require('express');
const express = require('express')
const app = express()
const con = require('./connection.js')
const obj = require('./operations.js');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));
app.post('/addcustomer',(req,res) => {
    console.log(req.body);
con.query("insert into customers set ?",[req.body],(err,results)=>
{
    if (err) throw err;
         res.json({"Last Id" : results.insertId});     // Working
})
//res.send("One Request")
        // con.query(qry, function(err, results) {
        //     if (err) throw err;
        //     res.json({"Last Id" : results.insertId});     // Working
        //     //res.write("Last Inserted Id is " + results.insertId)
        // });
        
});

app.get('/customers',(req,res) => {
    const qry ="SELECT * FROM CUSTOMERS ";

        con.query(qry, function(err, results) {
            if (err) throw err;
            res.json(results);     // Working
            //res.write("Last Inserted Id is " + results.insertId)
        });
        
});

app.listen(8080);