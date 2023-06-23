const express=require("express")

const app=express()
const ejs=require("ejs")

const body_parser=require("body-parser");

const lo=require("lodash");

app.use(body_parser.urlencoded({extended:true}))

app.use(express.static("public"))

app.set("view engine","ejs")

const homedt="sgdashgjsghjfgdhfgdskjfdsjkjfhdskjhfjxcvbcxnvbmckfu.kfdgfdssgfhdghjfdgfhgdhgfhjdgfhgdhjkjgkjhjhjkhkjhkjhkjhjkhkjhhkhkjhkhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjh."

const aboutdet="hkghdfggfjkggxcxvcjh dktyreityeryiueryte euoiewtioeuetioer.dn jteriutyiueriuytiuruyturhbrnmgbgfnmfg hjtgerytuerytyeriu." 

const contactdet = "hdgsfgfd rkjytiuytoitweuoruwo. poriipo mgruwtyurgsfdufsdfsdjfhfksd hgdfsadjashgfgfhdsgfjsg qywterqwretyqwryteqwreytrqw."


let titl=["Home"]
let cont=[]
cont.push(homedt)


app.get("/",function(req,res){
    res.render("home",{name:titl,home:cont});
})

app.get("/aboutus",function(req,res){
    // console.log(req.params.name)
    res.render("aboutus",{aboutdet:aboutdet})
})

app.get("/contactus",function(req,res){
    res.render("contactus",{contactdet:contactdet})
})

app.get("/compose",function(req,res){
    res.render("compose")
})

app.post("/compose",function(req,res){
    let title=req.body.title;
    let blog=req.body.composetext;
    if(title!="" && blog!=""){
        titl.push(title)
        cont.push(blog)
        res.redirect("/")
        res.render("home",{name:titl,home:cont})
        
    }
    else{
        res.redirect("/compose")
    }
})

app.get("/posts/:postnm",function(req,res){
    
    var posttitle=req.params.postnm

    titl.forEach(function(post){

        var storetitle=lo.lowerCase(post)
        if(posttitle===storetitle){

            var i=Number(titl.indexOf(post))
            res.render("postm",{name:post,content:cont[i]})
            console.log("found")
            
        } 
    })
})



app.listen(3000,function(){
    console.log("listening.......")
})