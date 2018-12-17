let LibraryModel = (() => {
    var BOOKS;
    let HISTORY = [];

    function getBooks(cb){
        var xhr = new XMLHttpRequest();
    
        xhr.open("GET", "https://rsu-library-api.herokuapp.com/books", true);
    
        xhr.send();
    
        xhr.onload = function() {    
            try {               
                BOOKS = JSON.parse(xhr.responseText);
                cb(BOOKS);
            } catch (e) {
                console.log( "Некорректный ответ " + e.message );
            }
              
        }
    }

    function filteringBook(cb){
        let target = event.target;

        let result;
    
        this.showAll = function(){
            result = BOOKS.slice();
        };
    
        this.showRecent = function(){
            result = BOOKS.slice().sort(function(a, b){
                if(a.createdAt < b.createdAt){
                    return 1;
                }
                return -1;
            });
        }
    
        this.showPopular = function(){
            result = BOOKS.slice().sort(function(a, b){
                if(a.rating <= b.rating){
                    return 1;
                }
                return -1;
            });
        }
    
        this.showFree = function(){
            result = BOOKS.filter(function(item){
                return item.cost === 0;
            });
        }
    
        let action = target.getAttribute('data-filter');
    
        if(action){
            this[action]();
            cb(result);
        }
    }

    function handleChangeSearch(event, cb){
    
        const value = event.target.value.toLowerCase();
    
        const result = BOOKS.filter(function(item){
            if(item.title.toLowerCase().indexOf(value) !== -1 ||
                 item.author.firstName.toLowerCase().indexOf(value) !== -1 ||
                 item.author.lastName.toLowerCase().indexOf(value) !== -1){
                return item;
            }
        });

        cb(result);
    }

    function setBooks(value, cb){
        BOOKS.push(value);
        cb(BOOKS);
    }

    return{
        getBooks,
        HISTORY: HISTORY,
        filteringBook,
        handleChangeSearch,
        setBooks
    }

})();