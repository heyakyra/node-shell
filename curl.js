const request = require('request');
module.exports = function(args) {request(args[0], function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    process.stdout.write("\nprompt > ");
    });
}