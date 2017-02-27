var Drummers = require('../models/drummerModel'); //this is a model

var express = require('express');
var router = express.Router();

    router.get('/api/drummers/:uname', function(request, response) {
        Drummers.find({ username: request.params.uname },
        function(err, drummers) {
            if (err) {
                throw err;
            }
            else {
                response.json(drummers);
            }
        });
    });

    router.get('/api/drummer/:id', function (request, response) {
        Drummers.findById({ _id: request.params.id }, function(err, drummer) {
            if (err) {
                throw err;
            }
            else {
                response.json(drummer);
            }
        });
    });

    router.post('/api/drummer/edit', function(request, response) {
        if (request.body.id) {     //this checks if the id already exists, in which case its an update. Otherwise it will return 'id not found'
            Drummers.findByIdAndUpdate(request.body.id, {
                 drumEndorsment: request.body.drumEndorsment,
                 yearsOfPlaying: request.body.yearsOfPlaying,
                 age: request.body.age,
                 albums: request.body.albums,
                 songs: request.body.songs,
                 currentBand: request.body.currentBand,
                 imageAttached: false
            }, function (err, drummer) {   //this function is run after .findByIdAndUpdate() and returns 'success' if nothing went wrong
                if (err) {
                    throw err;
                }
                else {
                    response.send('Success');
                }
            });
        }
        else {
            response.send('ID not found ');
            response.send(response);
        }

    });

    router.post('/api/drummer/new', function(request, response) {
        var newDrummer = Drummers({ //creates a new drummer
                username: 'test',
                drummerName: request.body.drummerName,
                drumEndorsment: request.body.drumEndorsment,
                yearsOfPlaying: request.body.yearsOfPlaying,
                born: request.body.born,
                age: request.body.age,
                bio: request.body.bio,
                ethnicity: request.body.ethnicity,
                albums: request.body.albums,
                songs: request.body.songs,
                currentBand: request.body.currentBand,
                imageAttached: request.body.imageAttached
            });
            newDrummer.save(function(err) {
                response.send('New drummer created!');
            })
    })

    router.delete('/api/drummer', function (request, response) {
        Drummers.findByIdAndRemove(request.body.id, function(err) {
            if (err) {
                throw err;
            }
            else {
                response.send('Deleted');
            }
        })
    })

module.exports = router;
