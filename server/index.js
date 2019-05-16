var rpc = require('node-json-rpc');
var movieService = require("./movieService");

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
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    }
};

// Create a server object with options
var serv = new rpc.Server(options);

// get all titles
serv.addMethod('getAllTitles', function (parameter, callback) {
    var error, result;
    result = movieService.getAllTitles();

    if(!result){
        error = "something went wrong!";
    }
    callback(error, result);
});

serv.addMethod('findMovieById', function (parameter, callback) {
    var error, result;

    if(parameter){
        result = movieService.findMovieById(parameter[0]); 
        if(!result){
            error = "findMovieById: Movie not found";
        }
    }
    callback(error, result);
});

serv.addMethod('isAvailable', function (parameter, callback) {
    var error, result;

    if(parameter){
        result = movieService.isAvailable(parameter[0]);
    }
    callback(error, result);
});


serv.addMethod('rentMovieById', function (parameter, callback) {
    var error, result;

    if(parameter){
        result = movieService.rentMovieById(parameter[0]); 
        if(!result){
            error = "rentMovieById: Movie is not available!";
        }
    }
    callback(error, result);
});


// Start the server
serv.start(function (error) {
    // Did server start succeed ?
    if (error) throw error;
    else console.log('Server running ...');
});

