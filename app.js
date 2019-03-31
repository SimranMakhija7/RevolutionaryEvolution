
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    request		= require("request");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:"true"}));
var URL="https://sonali0123.github.io/evolution/data.json";


//routes

//root route
app.get("/",function(req, res){
  	res.render("landing");
});

app.get("/evolution",function(req,res){
	res.render("evolution");
});
//index route
app.get("/home",function(req,res){

	request(URL,function(error,response,body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("home",{data : data});
		} 
	}); 
});

app.post("/home",function(req,res){
		var query = req.body.query;
	    var url = "show/"+query;
	    res.render(url);
	}); 

app.get("/show",function(req,res){
	res.render("show");
});

app.get("/show/:name",function(req,res){
	var name=req.params.name;
	request(URL,function(error,response,body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			data.forEach(function(data){
				if(data.name==name){
				res.render("show",{data : data});
				}
			});
		} 
	});
});

app.get("/show/:name/:time",function(req,res){
	var name=req.params.name,
		time=req.params.time;
	request(URL,function(error,response,body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			data.forEach(function(data){
				if(data.name.toLowerCase()==name.toLowerCase()){
					var specie=data;
				if(time==specie.timeline[0].when){
					res.render("stage0",{data : specie});
				}
				else{
					specie.timeline.forEach(function(stage){
						if(stage.when==time){
							var i=specie.timeline.indexOf(stage);
							res.render("stage1",{data: specie,i : i})
						}
					});
				}
				}
			});
		} 
	});
});

//server
app.listen(3000, function(){
console.log("The Server Has Started on localhost 3000!");
});