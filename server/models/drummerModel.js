var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DrummerSchema = new Schema({
    username: String,
    drummerName: String,
    drumEndorsment: String,
    yearsOfPlaying: String,
    born: String,
    age: String,
    bio: String,
    ethnicity: String,
    albums: String,
    songs: String,
    currentBand: String,
    imageAttached: Boolean
});

var Drummers = mongoose.model('Drummers', DrummerSchema);//creates model based on schema above

module.exports = Drummers;