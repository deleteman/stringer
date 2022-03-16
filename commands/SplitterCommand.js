const {Command} = require('./Command')

class Splitter extends Command {

    constructor() {
        super("split",
              "Splits a string into individual words or using the specified splitter",
            [
                ["<string>", "The actual string to split"]
            ],
            [
                ["-s", "--separator <char>", "the word separator, by default it'll use the space character", " "]
            ])
    }

    action(str, options) {
        const splitter = options.separator
        this.result = (str.split(splitter))
    }
}

module.exports= Splitter