var movieService = require("./movieService");
var chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style

var testMovie = {
    id: 4,
    title: 'Star Wars',
    year: '1977',
    movieInfo: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire`s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
    numRents: 0,
    available: 11
}

movieService.consoleTest();

// test getAllTitles() -> movie list length
expect(movieService.getAllTitles().length).to.equal(16);

// test findMovieById(*id*)
expect(movieService.findMovieById(testMovie.id).id).to.equal(testMovie.id);
expect(movieService.findMovieById(testMovie.id).title).to.equal(testMovie.title);

// test findByTitle
expect(movieService.findByTitle("Star").length).to.equal(9);

// test isAvailable
expect(movieService.isAvailable(1)).to.equal(true);
expect(movieService.isAvailable(16)).to.equal(false);

// test rentMovieById
expect(movieService.isAvailable(13)).to.equal(true);
var movie = movieService.rentMovieById(13);
expect(movie.id).to.equal(13);
expect(movieService.isAvailable(13)).to.equal(false);

// test rentMovieByTitle
var testrentMovieByTitle = movieService.rentMovieByTitle("Pulp Fiction");
expect(testrentMovieByTitle).to.not.be.undefined;
expect(Array.isArray(testrentMovieByTitle)).to.equal(false);
testrentMovieByTitle = movieService.rentMovieByTitle("Star Wars");
expect(testrentMovieByTitle).to.be.undefined;





