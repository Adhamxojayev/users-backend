const http = require('http')
const {host, PORT} = require('./config.js')


const server = http.createServer((req,res) => {
    if(req.url == '/api/data' && req.method == 'GET'){
        res.write(
            JSON.stringify([
                {userId: 1, username: 'Avazbek'},
                {userId: 2, username: 'Abror'},
                {userId: 3, username: 'Umid'},
                {userId: 4, username: 'Nodir'},
            ])
        )
        res.end()
    }
})


server.listen(PORT, () => {
    console.log(`backend http://${host}:${PORT}`);
})