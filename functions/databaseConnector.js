var mongoose = require('mongoose');
mongoose.connect('mongodb://on;localhost/users', {useNewUrlParser: true});
var conn = mongoose.connecti
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;