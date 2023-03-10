const http = require('http');
const fs  = require('fs');
/**
 * 
 * @param {http.IncomingMessage} req 
 * @param {http.ServerResponse} res 
 * 
 */
function rqListner(req, res) {
    // function rqListner({url,method}, res) {
 if(req.url == '/' && req.method == 'GET') {
    // if(url == '/' && method == 'GET') {
    res.write(`<!DocType html><html>
    <head><title>Enter Text</title>
    <style> * { box-sizing:border-box;}</style>
    </head>
    <body>
    <form method="POST" action="/message" style="color:green;box-shadow:3px 3px grey;margin-left: 5px ;padding:10px;height:100%">
    <button type="submit">Enter text</button>
    <input type="text" name="text" placeholder="Enter text" />
    </form>
    </body>
    </html>
    `);
    return res.end();
 } else if(req.url == '/message' && req.method == 'POST') { 
    const body = [];
    req.on('data', chunk => {
        console.log({chunk});
        body.push(chunk)
    });
    req.on('end', () => {
        const parsedBody  = Buffer.concat(body).toString();
        fs.writeFileSync('message.txt', parsedBody.split('=')[1].replace('+', ' '));
    });
    // res.statusCode = 302;
    // res.setHeader('Location','/')
    // res.write(`<head>${JSON.parse(req)} </head>`);
    res.writeHead(302,['Location','/']);
    return res.end();
 }

// process.exit();
res.setHeader('Content-Type', 'application/json');
res.write(JSON.stringify({"Hello":"world!"}));
res.end();
}
const server = http.createServer(rqListner);

server.listen(5500);