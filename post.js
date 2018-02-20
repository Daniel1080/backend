

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql')

var app = express();

app.use(bodyParser.json());

app.post('/', function(request, response){
  console.log(request.body);      
  console.log(typeof request);
  
  var user = request.body.username;
  var pass = request.body.password;

  console.log("Username is  :: " + user);
  console.log("Password is :: " + pass);
  Authenticate(user, pass);

});

app.listen(3000);

function Authenticate(user, pass){
    
    
dbauth(user, pass);
    

}
function dbauth(user, pass){

con = mysql.createConnection({

host: "127.0.0.1",
user: "root",
password: '000',
database: 'sys'
});

con.connect(function(err){

if(err) throw err;
console.log("connected to DB");


});

USRsql = 'select * from users where username = "' + user + '"'; 
    con.query(USRsql, function(err, result, fields ){

        if (err) throw err;
        console.log(typeof result);
        console.log(result);

        if (result[0].username == user){
            console.log("Username Confirmed!");
            dbpass(user, pass);
        }
        else{
            console.log("Username not found. ");
        }

    });

}

function dbpass(user, pass){




}
