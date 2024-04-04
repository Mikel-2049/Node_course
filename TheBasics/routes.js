const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Oh, Hi! Do You Miss Her?</title></head>');
        res.write('<body><h1>Oh, Hi! Do You Miss Her?</h1></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/user'){
        res.write('<html>');
        res.write('<ul><li>Cabron 1</li><li>Cabron 2</li><li>Cabron 3</li></ul>');
        res.write('</html>');
        return res.end(); 
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    
};

module.exports = requestHandler;