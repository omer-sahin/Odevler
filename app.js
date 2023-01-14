const fs=require("fs")


setTimeout(() => {
    fs.writeFile("employees.json",'{"Name":"Employee 1 Name","Salary":2000}',(err)=>{
        if(err) console.log(err)
    
        console.log("Employees.json Başarılı bir şekilde oluşturuldu")
    
    })
    
    
}, 1000);



setTimeout(() => {
    fs.readFile("employees.json","utf-8",(err,data)=>{
        if(err) console.log(err)
        console.log(data)
    
    })
    
    
}, 2000);

setTimeout(() => {
    fs.writeFile("employees.json",'{"Name":"Employee 2 Name","Salary":2000}',(err)=>{
        if(err) console.log(err)
    
        console.log("Employees.json Başarılı bir şekilde oluşturuldu")
    
    })
    
    
}, 3000);



setTimeout(() => {
    fs.unlink("employees.json",(error)=>{


        if(error) console.log("Bir hata oluştu")
    
    
        console.log("Dosyta başarılı bir şekilde silindi")
    })
    
}, 4000);

