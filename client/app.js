var rpc = new $.JsonRpcClient({ ajaxUrl: 'http://127.0.0.1:5080' });

/**
 * click on button "all titles"
 */
$('#allTitles').click(function () {
  rpc.call('getAllTitles', [],
    function (result) {
      if (result) {
        for (let index = 0; index < result.length; index++) {
          const element = result[index];
          $('#movieList').append('<li id="' + element.id
            + '" class="list-group-item">'
            + element.title + '<button onclick="details('
            + element.id
            + ')" class="btn float-right btn-info">Details</Button></li>');
        }
      }
    },
    function (error) {
      $('#server-error').append(JSON.stringify(error));
    }
  );
});

/**
 * get movie details
 * @param {number} id 
 */
function details(id) {
  rpc.call('findMovieById', [id],
    function (result) {
      showDetails(result);
    },
    function (error) {
      displayError(error);
    }
  );

}

/**
 * is movie available
 * @param {number} id 
 */
function isAvailable(id) {
  return new Promise(resolve => {
    rpc.call('isAvailable', [id], function (result) {
      resolve(result);
    }, function (error) {
      resolve(false);
    });
  });

}

/**
 * show error msg
 * @param {string} error 
 */
function displayError(error) {
  $('#server-error').empty();
  var content = '<div class="alert alert-danger" role="alert">';
  content += JSON.stringify(error);
  content += '</div>';
  $('#server-error').append(content).fadeIn('fast').delay(2000).fadeOut();;
}

/**
 * order movie by id
 * @param {number} id 
 */
function order(id) {
  console.log("order: " + id);
  rpc.call('rentMovieById', [id], function (result) {
    addToMyList(result);
    showDetails(result);
  }, function (error) {
    displayError(error);
  });
}


/**
 * show movie details
 * @param {movie object} result 
 */
async function showDetails(result) {
  $('#details').empty().hide();

  var available = result.available - result.numRents;

  var content = '<h3>' + result.title + '</h3><hr>';
  content += '<h4>Year:</h4><p>' + result.year + '</p>';
  content += '<h4>Info:</h4><p>' + result.movieInfo + '</p>';
  content += '<h4>Available:</h4><p>' + available + '</p>';
  content += '<hr>';

  var available = await isAvailable(result.id);
  if (available) {
    content += '<button  onclick="order(' +
      result.id
      + ')" type="button" class="btn btn-primary">Order</button>'
  } else {
    content += '<button type="button" class="btn btn-default disabled">Order</button>'
  }

  $('#details').append(content);
  $('#details').fadeIn('slow');
}

function addToMyList(movie) {
  var content = '<li>' + movie.title + '</li>';
  $('#myMovies').append(content);
}