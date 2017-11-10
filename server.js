var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
// ^^^ Installations and Setup ^^^

// app.get("/", function(request, response){
//     response.send("<h1>Nihao</h1>");
// })

// app.use(express.static(__dirname + "/static"));
// console.log(__dirname);


app.get("/", function(request, response){
    response.render("form");
});

app.post("/result", function (request, response){
    console.log("post data@@@", request.body);
    response.render("result", {result: request.body});
});

app.post("/back", function(request, response){
    response.redirect("/");
});

app.listen(8000, function() {
    console.log("listenning on 8000");
});