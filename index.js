const http=require("http")
const fs=require("fs")
const port=5000;
const localhost="127.0.0.1"

const app=http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile("index.html",(err,data)=>{
            res.write(data)
            res.end();
        })
    }
   else if(req.url==="/about"){
        fs.readFile("about.html",(err,data)=>{
            res.write(data)
            res.end();
        })
    }

    else if(req.url==="/contact"){
        fs.readFile("contact.html",(err,data)=>{
            res.write(data)
            res.end()
        })
    }
    else{
        fs.readFile("404.html",(err,data)=>{
            res.write(data)
            res.end();
        })
    }


})

app.listen(port,localhost,()=>{
    console.log(`Sv Aktif... http://${localhost}:${port}`)
})