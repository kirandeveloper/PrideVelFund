var express = require("express");
var path = require("path");
var mongo = require("mongodb");
var bodyParser = require("body-parser");
var crypto = require("crypto");

var app = express();
//enter the name of the database in the end
var new_db = "mongodb://localhost:27017/signup_database";

app
    .get("/", function(req, res) {
        res.set({
            "Access-Control-Allow-Origin": "*",
        });
        return res.redirect("/public/signup.html");
    })
    .listen(3000);

console.log("Server listening at : 3000");
app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true,
    })
);

var getHash = (pass, repass) => {
    var hmac = crypto.createHmac("sha512", "sha512");

    //passing the data to be hashed
    data = hmac.update(pass);
    //Creating the hmac in the required format
    gen_hmac = data.digest("hex");
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);
    return gen_hmac;
};

// Sign-up function starts here. . .
app.post("/sign_up", function(req, res) {
    var email = req.body.email;
    var pass = req.body.password;
    var repass = req.body.repassword;
    var password = getHash(pass);
    var repassword = getHash(repass);

    var data = {
        email: email,
        password: password,
        repassword: repassword
    };

    mongo.connect(new_db, function(error, db) {
        if (error) {
            throw error;
        }
        console.log("connected to database successfully");
        //CREATING A COLLECTION IN MONGODB USING NODE.JS
        db.collection("userdetails").insertOne(data, (err, collection) => {
            if (err) throw err;
            console.log("Record inserted successfully");
            console.log(collection);
        });
    });

    console.log("DATA is " + JSON.stringify(data));
    res.set({
        "Access-Control-Allow-Origin": "*",
    });
    return res.redirect("/public/success.html");
});

// Login function starts here. . .
app.post("/login", function(req, res) {
    var email = req.body.email;
    var pass = req.body.password;
    
    var data = {
        email: email,
        password: password
    };

    mongo.connect(new_db, function(error, db) {
        if (error) {
            throw error;
        }
        console.log("connected to database successfully");
        //CREATING A COLLECTION IN MONGODB USING NODE.JS
        db.collection("userdetails").find(data, (err, collection) => {
            if (err) throw err;
            console.log("login successfully");
            console.log(collection);
        });
    });

    console.log("DATA is " + JSON.stringify(data));
    res.set({
        "Access-Control-Allow-Origin": "*",
    });
    return res.redirect("/public/index.html");
});

app.get('/showall', function(req, res) {

    mongo.connect(new_db, function(err, db) {
        useNewUrlParser: true
        if (err) throw err;
        var dbo = db.db("signup_database");
        dbo.collection("userdetails").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });

});
    