var express = require("express");
var path = require("path");
var http = require("http");
var produse = require("./public/produse");
var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index", { produse: produse });
});

app.get("/product/:product_id", function (req, res) {
    var prod_id = req.params.product_id;
    //console.log(produse);
    let produs = produse.find(x => x.id == prod_id);
    console.log(produs);
    res.render("produs", { produs: produs });
});

app.get("/add-to-cart/:product_id", function (req, res) {
    var prod_id = req.params.product_id;
    //let produs = produse.find(x => x.id == prod_id);
    //console.log(produs);
    res.render("produs", { produs: produs });
});

app.get("/cart", function (req, res) {
    res.render("cos");
});

app.get("/about", function (req, res) {
    res.render("despre");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});



app.use(function (req, res) {
    res.status(404).redirect("404");
});

app.listen(3000);