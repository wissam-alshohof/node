const http = require('http');
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
    <form method="post" style="color:green;box-shadow:3px 3px grey;margin-left: 5px ;padding:10px;height:100%">
    <button type="submit">Enter text</button>
    <input type="text" name="text" value="Enter text" />
    </form>
    </body>
    </html>
    `);
    return res.end();
 } else { 
    console.log('request',{req});
    // res.write(`<head>${JSON.parse(req)} </head>`);
    res.end();
 }

process.exit();
res.setHeader('Content-Type', 'application/json');
res.write(JSON.stringify({"Hello":"world!"}));
res.end();
}
const server = http.createServer(rqListner);

server.listen(5500);