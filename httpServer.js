const http =require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end('hello from the others sides Aashish');
    }
    else if(req.url=="/about"){
        res.end('hello from the About sides Aashish');
    }
    else if(req.url=="/userapi"){
        res.end('hello from the userApi sides Aashish');
    }  
    else {
        
        res.end('ERROR 404');
    } 
});

server.listen(3000,"127.0.0.1",()=>{
    console.log('listening to port no 3000');
});