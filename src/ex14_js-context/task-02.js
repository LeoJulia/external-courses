function Hangman(world){
    this.errors = 6;

    this.letters = world.split('');

    this.guessedLetters = this.letters.map(function(a) {
        return '_';
    });
    
    this.wrongLetter = [];

    this.guess = function(letter) {
        letter = letter.toLowerCase();

        var from = 0;

        if(this.errors !== 0){
            if(this.letters.indexOf(letter, from) === -1){
                this.errors--;
                this.wrongLetter.push(letter);
    
                console.log('wrong letter, errors left ' + this.errors + ' | ' + this.wrongLetter.join(','));
            } else {
                while(this.letters.indexOf(letter, from) !== -1){
                    this.guessedLetters[this.letters.indexOf(letter, from)] = letter;
                    from = this.letters.indexOf(letter, from) + 1;
                }
                
                if(this.guessedLetters.indexOf('_') !== -1){
                    console.log(this.guessedLetters.join(''));
                } else {
                    console.log(this.guessedLetters.join('') + ' | You won!');
                }
            }
        } else {
            console.log('You lost');
        }
        
        return this;
    }

    this.getGuessedString = function() {
        console.log( this.guessedLetters.join('') );
    }

    this.getErrorsLeft = function() {
        console.log( this.errors );
    }

    this.getWrongSymbols = function(){
        console.log( this.wrongLetter );
    }

    this.startAgain = function(world){
        this.errors = 6;

        this.letters = world.split('');

        this.guessedLetters = this.letters.map(function(a) {
            return '_';
        });
    
        this.wrongLetter = [];

        return this;
    }

    this.getStatus = function(){
        console.log(this.guessedLetters.join('') + ' | errors left ' + this.errors);
        return this;
    }
}

var hangman = new Hangman('webpurple');

module.exports = hangman;