const fs = require("fs");

module.exports = function(args, done) {
  done(fs.readFile(args[0], "utf8", (err, data) => {
    if (err) throw err;
    return data;
  }))
  
};
