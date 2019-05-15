var rpc = require('./lib/index');

var options = {
    // int port of rpc server, default 5080 for http or 5433 for https
    port: 5080,
    // string domain name or ip of rpc server, default '127.0.0.1'
    host: '127.0.0.1',
    // string with default path, default '/'
    path: '/',
    // boolean false to turn rpc checks off, default true
    strict: true,
    headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'*',
        'Access-Control-Allow-Headers':'*',
      } 
};

// Create a server object with options
var serv = new rpc.Server(options);



// Add your methods
serv.addMethod('myMethod', function (para, callback) {
    var error, result;

    console.log("para:" + JSON.stringify(para));
    // Add 2 or more parameters together
    if (para.length === 2) {
        result = para[0] + para[1];
    } else if (para.length > 2) {
        result = 0;
        para.forEach(function (v, i) {
            result += v;
        });
    } else {
        error = { code: -32602, message: "Invalid params" };
    }

    callback(error, result);
});

// Start the server
serv.start(function (error) {
    // Did server start succeed ?
    if (error) throw error;
    else console.log('Server running ...');
});
