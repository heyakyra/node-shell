const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
process.stdout.write("prompt > ");

process.stdin.on("data", data => {
  const input = data
    .toString()
    .trim()
    .split(" ");
  const cmd = input[0];
  const args = input.slice(1);

  if (cmd === "pwd") {
    pwd(args);
  } else if (cmd === "ls") {
    ls(args);
  } else if (cmd === "cat") {
    cat(args);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
