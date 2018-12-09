var BOOKS;

function loadBooks() {
    var xhr = new XMLHttpRequest();
  
    xhr.open("GET", "https://rsu-library-api.herokuapp.com/books", true);
  
    xhr.send();
  
    xhr.onload = function() {    
          try {
            BOOKS = JSON.parse(xhr.responseText);
          } catch (e) {
            alert( "Некорректный ответ " + e.message );
          }

          showLibrary();
    
      }
}

function calculateRating(rating, elem){
    var starTotal = 5;

    var starPercentage = rating / starTotal * 100;
    var starPercentageRounded = Math.round(starPercentage / 10) * 10 - 1 + "%";
    elem.style.width = starPercentageRounded;

}

function createBook(obj){
        var book = document.createElement("div");
        book.className = "library__item book";

        var bookImg = document.createElement("img");
        bookImg.className = "book__img";

        if(obj.image_url){
            var link = obj.image_url;
        } else {
            var link = "https://rsu-library-api.herokuapp.com/static/images/nocover.jpg";
        }
        
        bookImg.setAttribute("src", link);
        book.appendChild(bookImg);

        var bookTitle = document.createElement("span");
        bookTitle.className = "book__title";
        bookTitle.innerHTML = obj.title;
        book.appendChild(bookTitle);

        var boorAuthor = document.createElement("span");
        boorAuthor.className = "book__author";
        boorAuthor.innerHTML = "by " + obj.author.firstName + ' ' + obj.author.lastName;
        book.appendChild(boorAuthor);

        var bookRating = document.createElement("div");
        bookRating.className = "book__rating";
        book.appendChild(bookRating);

        
        for(var i = 5; i > 0; i--){
            var radio = document.createElement("input");
            radio.className = "book__rating--input";
            radio.setAttribute('id', obj.title + "-" + i);
            radio.setAttribute('type', 'radio');
            radio.setAttribute('name', 'rating');
            radio.setAttribute("data-value", i);


            var star = document.createElement('label');
            star.className = "book__rating--star fa fa-star-o";
            star.setAttribute('for', obj.title + "-" + i);

            bookRating.appendChild(radio);
            bookRating.appendChild(star);
        }

        var bookRatingInner = document.createElement("div");
        bookRatingInner.className = "book__rating--inner";
        bookRating.appendChild(bookRatingInner);

        calculateRating(obj.rating, bookRatingInner);

        return book;
}

function showLibrary(){

    var library = document.querySelector('.library');
    library.innerHTML = '';

    BOOKS.forEach(function(item){
        var bookItem = createBook(item);
        bookItem.setAttribute("data-id", item.id);
        library.appendChild(bookItem);
    });
}

function handleChangeSearch(event){

    var library = document.querySelector('.library');

    var value = event.target.value.toLowerCase();

    var result = BOOKS.filter(function(item){
        if(item.title.toLowerCase().indexOf(value) !== -1 ||
             item.author.firstName.toLowerCase().indexOf(value) !== -1 ||
             item.author.lastName.toLowerCase().indexOf(value) !== -1){
            return item;
        }
    });

    library.innerHTML = '';

    result.forEach(function(item){
        var bookItem = createBook(item);
        bookItem.setAttribute("data-id", item.id);
        library.appendChild(bookItem);
    })
}

var modal = document.querySelector('.modal');

function openModal() {
    modal.style.display = "block";
}

var btnOpenModal = document.querySelector(".sidebar__button");
btnOpenModal.addEventListener('click', openModal);

function closeModal() {
    modal.style.display = "none";
}

var btnCloseModal = document.querySelector(".close");
btnCloseModal.addEventListener('click', btnCloseModal);


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function addBook(){
    var titleInput = document.querySelectorAll(".modal__form--input")[0];
    var author = document.querySelectorAll(".modal__form--input")[1];

    var book = {
        title: titleInput.value,
        author: {
            firstName: author.value.split(' ')[0] || '',
            lastName: author.value.split(' ')[1] || ''
        },
        cost: 0,
        createdAt: new Date().getTime(),
        image_url:'',
        rating: 0,
        updatedAt: new Date().getTime()
    }

    BOOKS.push(book);
    
    closeModal();
    showLibrary();
}

document.addEventListener("DOMContentLoaded", loadBooks);

var searcher = document.querySelector(".searcher__item");
searcher.addEventListener('input', handleChangeSearch);


var modalForm = document.querySelector(".modal__form");
modalForm.addEventListener('submit', addBook);

function filteringBook(){
    var target = event.target;
    var library = document.querySelector(".library");
    library.innerHTML = "";

    this.showAll = function(){
        showLibrary();
    };

    this.showRecent = function(){
        var result = BOOKS.map(function(item){
            return item;
        }).sort(function(a, b){
            if(a.createdAt < b.createdAt){
                return 1;
            }
            return -1;
        });
    
        result.forEach(function(item){
            var bookItem = createBook(item);
            bookItem.setAttribute("data-id", item.id);
            library.appendChild(bookItem);
        });
    }

    this.showPopular = function(){
        var result = BOOKS.map(function(item){
            return item;
        }).sort(function(a, b){
            if(a.rating < b.rating){
                return 1;
            }
            return -1;
        });
    
        result.forEach(function(item){
            var bookItem = createBook(item);
            bookItem.setAttribute("data-id", item.id);
            library.appendChild(bookItem);
        });
    }

    this.showFree = function(){
        var result = BOOKS.filter(function(item){
            return item.cost === 0
        });
    
        result.forEach(function(item){
            var bookItem = createBook(item);
            bookItem.setAttribute("data-id", item.id);
            library.appendChild(bookItem);
        });
    }

    var action = target.getAttribute('data-filter');

    if(action){
        this[action]();
    }
}

var filter = document.querySelector(".filter");
filter.addEventListener('click', filteringBook);