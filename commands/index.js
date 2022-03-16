var normalizedPath = require("path").join(__dirname, "./");

let importedCommands = []
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    if(file.match(/[a-zA-Z]+Command.js/)) {
        const c = require("./" + file);
        importedCommands.push(new c())
    }

});


module.exports.commands = importedCommands
