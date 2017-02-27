var configData = require('./config');//config.json

module.exports = {
    DbConnectionString: function () {
        return 'mongodb://' + configData.username + ':' + configData.password + '@ds157549.mlab.com:57549/myfavdrummer';
    }
}