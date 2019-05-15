var foo = new $.JsonRpcClient({ ajaxUrl: 'http://127.0.0.1:5080' });
foo.call( 'myMethod', [ 'A parameter', 'B parameter' ],
  function(result) { 
      $('#server-response').append(JSON.stringify(result)); 
    },
  function(error)  { 
    $('#server-error').append(JSON.stringify(error));
    }
);