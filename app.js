var express     = require("express"),
    app         = express();
    
    
// app config
app.set ("view engine", "ejs");
app.use(express.static("public"));


// ============================
// ROUTES
//=============================

//INDEX ROUTE
app.get("/", function (req, res) {
    res.render("index");
});

//CONTACT US ROUTE
app.get("/contact_us", function (req, res) {
    res.render("contact_us");
});

//VACANCIES ROUTE
app.get("/vacancies", function (req, res) {
    res.render("vacancies");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Evricamp landing server running now!");
});