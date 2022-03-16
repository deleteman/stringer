const {Command} = require('./Command')

module.exports = class WordCounterCommand extends Command {

    constructor() {
        super(
            "wc",
            "Counts the number of words in the given string",
            [
                ["<string>", "The string to analize"]
            ],
            [
                ["-l", "--limit <char>", "The character that signals the end of a word, by default is the space character", " "],
                ["-w", "--word <string>", "Counts the number of times this single word appears inside the string"]
            ]
        )
    }

    _countWords(str, splitter) {
        return "Total words: " + str.split(splitter).length
    }
    
    _countSingleWord(str, w) {
        const matches = str.match(new RegExp(w, 'g')).length 
        let respStr = "The word " + w + " appears " 
        
        if(matches == 0) {
            return  "The word " + w + " doesn't appear on the string"
        }

        if(matches == 1) {
            respStr += "once inside the string"
        } else {
            respStr +=  matches + " times in the string"
        }

        
        return respStr
    }

    action(str, options) {
        const splitter = options.limit
        if(!options.word) {
            this.result = this._countWords(str, splitter) 
        } else {
            this.result = this._countSingleWord(str, options.word) 
        }

    }
}