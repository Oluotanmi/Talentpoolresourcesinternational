const http = require('http');

const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type' , 'text/plain');

    res.write("Hello world");

    res.send()
});

const port = 3000;
server.listen(port, () => {
    console.log(`server is connected on ${port}`)
})