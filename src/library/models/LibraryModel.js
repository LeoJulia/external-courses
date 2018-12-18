let LibraryModel = (() => {
    let BOOKS;
    let HISTORY = [];

    function getBooks(cb){
        const xhr = new XMLHttpRequest();
    
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

    showAll = () => {
        return BOOKS.slice();
    };

    showRecent = () => {
        return BOOKS.slice().sort(function(a, b){
            if(a.createdAt < b.createdAt){
                return 1;
            }
            return -1;
        });
    }

    showPopular = () => {
        return BOOKS.slice().sort(function(a, b){
            if(a.rating <= b.rating){
                return 1;
            }
            return -1;
        });
    }

    showFree = () => {
        return BOOKS.filter(function(item){
            return item.cost === 0;
        });
    }

    function filteringBook(cb){
        let target = event.target;

        let result;
    
        let action = target.getAttribute('data-filter');

        switch(action) {
            case "showRecent":  
                result = showRecent(result);
                break;
            case "showPopular":  
                result = showPopular(result);
                break;
            case "showFree":
                result = showFree(result);
                break;
            default:
                result = showAll(result);
                break;
        }
        
        cb(result);
    }

    function handleChangeSearch(event, cb){
    
        const value = event.target.value.toLowerCase();
    
        const result = BOOKS.filter((item) => 
                item.title.toLowerCase().indexOf(value) !== -1 ||
                item.author.firstName.toLowerCase().indexOf(value) !== -1 ||
                item.author.lastName.toLowerCase().indexOf(value) !== -1);
        
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