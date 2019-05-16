movieList = [
    { id: 1, title: 'Star Wars: Episode I - The Phantom Menace', year: '1999', movieInfo: 'Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.', numRents: 0, available: 2 },
    { id: 2, title: 'Star Wars: Episode II - Attack of the Clones ', year: '2002', movieInfo: 'Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.', numRents: 0, available: 10 },
    { id: 3, title: 'Star Wars: Episode III - Revenge of the Sith', year: '2005', movieInfo: 'Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.', numRents: 0, available: 9 },
    { id: 4, title: 'Star Wars', year: '1977', movieInfo: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire`s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.', numRents: 0, available: 11 },
    { id: 5, title: 'Star Wars: Episode V - The Empire Strikes Back', year: '1980', movieInfo: 'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.', numRents: 0, available: 9 },
    { id: 6, title: 'Star Wars: Episode VI - Return of the Jedi', year: '1982', movieInfo: 'After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor`s trap.', numRents: 0, available: 15 },
    { id: 7, title: 'Star Wars: Episode VII - The Force Awakens', year: '2015', movieInfo: 'Three decades after the Empire`s defeat, a new threat arises in the militant First Order. Defected stormtrooper Finn and the scavenger Rey are caught up in the Resistance`s search for the missing Luke Skywalker.', numRents: 0, available: 20 },
    { id: 8, title: 'Star Wars: Episode VIII - The Last Jedi ', year: '2017', movieInfo: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.', numRents: 0, available: 21 },
    { id: 9, title: 'Star Wars: The Rise of Skywalker', year: '2019', movieInfo: 'The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.', numRents: 0, available: 0 },
    { id: 10, title: 'John Wick', year: '2014', movieInfo: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.', numRents: 0, available: 10 },
    { id: 11, title: 'John Wick: Chapter 2', year: '2017', movieInfo: 'After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.', numRents: 0, available: 5 },
    { id: 12, title: 'John Wick: Chapter 3 - Parabellum', year: '2019', movieInfo: 'Super-assassin John Wick is on the run after killing a member of the international assassin`s guild, and with a $14 million price tag on his head - he is the target of hit men and women everywhere.        ', numRents: 0, available: 9 },
    { id: 13, title: 'Reservoir Dogs', year: '1992', movieInfo: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.', numRents: 0, available: 1 },
    { id: 14, title: 'Pulp Fiction', year: '1994', movieInfo: 'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.        ', numRents: 0, available: 8 },
    { id: 15, title: 'Jackie Brown', year: '1997', movieInfo: 'A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.        ', numRents: 0, available: 7 },
    { id: 16, title: 'Once Upon a Time in Hollywood', year: '2019', movieInfo: 'A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood`s Golden Age in 1969 Los Angeles.        ', numRents: 0, available: 0 }
];

module.exports = {
    getAllTitles: function () {
        movieTitleList = [];

        for (var i = 0, len = movieList.length; i < len; i++) {
            var movieTitle = { 
                title: movieList[i].title,
                id: movieList[i].id
            };
            movieTitleList.push(movieTitle);
        };
        return movieTitleList;
    },

    findMovieById: function (id) {
        for (var i = 0, len = movieList.length; i < len; i++) {
            if (movieList[i].id === id) {
                return movieList[i];
            }
        };
    },

    findByTitle: function (title) {
        var movieTitleList = [];
        for (var i = 0, len = movieList.length; i < len; i++) {
            if (movieList[i].title.includes(title)) {
                var movieTitle = { title: movieList[i].title };
                movieTitleList.push(movieTitle);
            }
        };
        return movieTitleList;
    },

    rentMovieById: function(id){
        var movie = this.findMovieById(id);
        if(movie && movie.available > movie.numRents){
            movie.numRents++
            return movie;
        }
    },

    rentMovieByTitle: function(title){
        var movie = this.findByTitle(title);
        if(movie.length ==1){
            return movie[0];
        }
    },

    isAvailable: function(id){
        var movie = this.findMovieById(id);
        if(movie.numRents < movie.available){
            return true;
        }
        return false;
    },

    consoleTest: function () {
        console.log("service runs...");
    }


}