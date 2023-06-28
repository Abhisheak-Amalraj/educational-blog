

// Initialize Firebase (ADD YOUR OWN DATA)
var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var firebase=require("firebase");


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index.ejs")
})

app.get("/about",function(req,res){
  res.render("about.ejs")
})

app.get("/events",function(req,res){
  res.render("events.ejs")
})

app.get("/events1",function(req,res){
  res.render("events1.ejs")
})

app.get("/events2",function(req,res){
  res.render("events2.ejs")
})

app.get("/events3",function(req,res){
  res.render("events3.ejs")
})

app.get("/events4",function(req,res){
  res.render("events4.ejs")
})

app.get("/events5",function(req,res){
  res.render("events5.ejs")
})

app.get("/events6",function(req,res){
  res.render("events6.ejs")
})

app.get("/office",function(req,res){
  res.render("office.ejs")
})

app.get("/contact",function(req,res){
  res.render("contact.ejs")
})



app.listen(process.env.PORT, process.env.IP, function(){
  console.log("The OSA Server Has Started!");
});