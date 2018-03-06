const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");
process.stdout.write("prompt > ");

process.stdin.on("data", data => {
  const input = data
    .toString()
    .trim()
    .split(" ");
  const cmd = input[0];
  const args = input.slice(1);

  if (cmd === "pwd") {
    pwd(args, done);
    
  } else if (cmd === "curl") {
    curl(args, done);
  } else if (cmd === "ls") {
    ls(args, done);
  } else if (cmd === "cat") {
    cat(args, done);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
  
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}