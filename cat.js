const fs = require("fs");

module.exports = function(args) {
  fs.readFile(args[0], "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
    process.stdout.write("\nprompt > ");
  });
};
