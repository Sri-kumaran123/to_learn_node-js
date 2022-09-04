const http=require('http')

const server=http.createServer((req,res)=>
{
    //
    if(req.url==='/')
    res.write('wecolme to our first Page')
    res.end()
});

server.on('connection',(socket)=>{
    console.log('new connection')
})

server.listen(5000);