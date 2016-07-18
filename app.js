var express     = require("express"),
    app         = express();
    
    
// app config
app.set ("view engine", "ejs");


// ============================
// ROUTES
//=============================

//INDEX ROUTE
app.get("/", function (req, res) {
    res.render("index");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Evricamp landing server running now!");
});