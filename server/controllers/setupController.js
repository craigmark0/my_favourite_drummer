var Drummers = require('../models/drummerModel');//this is a model

module.exports = function(app) {

    app.get('/api/setupDrummers', function(request, response) {
        
        //starter seed data
        var starterDrummers = 
        [
            {
                username: 'test',
                drummerName: 'Chris Coleman',
                drumEndorsment: 'Tama Drums',
                yearsOfPlaying: '15',
                born: '10 June 1970',
                age: '40',
                bio: 'Christopher R. Coleman has been playing drums since the ripe old age of 2, sitting on his uncle\'s knee in church. He traveled with his father and uncles who performed together in a gospel ensemble.',
                ethnicity:'African American',
                albums: 'Fighter-David Nail, Lovers and Leavers-Hayes Carll',
                songs: 'A brothers Love, Blue Louisiana',
                currentBand: 'New Kids On The Block',
                imageAttached: false
            },
            {
                username: 'test',
                drummerName: 'Buddy Rich',
                drumEndorsment: 'Zildjian Cymbals',
                yearsOfPlaying: '30',
                born: '30 September 1917',
                age: 'died',
                bio: 'Bernard "Buddy" Rich was an American jazz drummer and bandleader. Known for his virtuoso technique, power, and speed, Rich was billed as "the world\'s greatest drummer" during his career.',
                ethnicity: 'American',
                albums: 'Big Swing Face, Krupa and Rich',
                songs: 'Bugle Call Rag, West Side Story Medley',
                currentBand: 'None',
                imageAttached: false
            },
            {
                username: 'test',
                drummerName: 'Neil Peart',
                drumEndorsment: 'Zildjian',
                yearsOfPlaying: '15',
                born: '12 September 1952',
                age: '64',
                bio: 'Neil Ellwood Peart, OC, is a Canadian-American musician and author, best known as the drummer and primary lyricist for the rock band Rush.',
                ethnicity: 'Canadian',
                albums: 'none',
                songs: 'Limelight, Time Stand Still',
                currentBand: 'Rush',
                imageAttached: false
            },
            {
                username: 'test',
                drummerName: 'Ringo Starr',
                drumEndorsment: 'Tama Drums',
                yearsOfPlaying: '60',
                born: '7 July 1940',
                age: '76',
                bio: 'Richard Starkey, MBE, known professionally as Ringo Starr, is an English musician, singer, songwriter and actor who gained worldwide fame as the drummer for the Beatles.',
                ethnicity: 'English',
                albums: 'Abbey Road, Revolver',
                songs: 'It Dont Come Easy, Photograph',
                currentBand: 'Ringo Starr and His All Starr Band',
                imageAttached: false
            },
        ];
        Drummers.create(starterDrummers, function (err, results) {
            if (err){
                throw err;
            }
            else {
                response.send(results);
            }
            
        });
    })


}