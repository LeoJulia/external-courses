let LibraryView = ((LibraryController, Utils) => {
    'use strict';

    let searcher = document.querySelector(".searcher__item");
    searcher.addEventListener('input', LibraryController.search);

    var modal = document.querySelector('.modal');
    LibraryController.getModal(modal);

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    var btnOpenModal = document.querySelector(".sidebar__button");
    btnOpenModal.addEventListener('click', LibraryController.openModal);

    var btnCloseModal = document.querySelector(".close");
    btnCloseModal.addEventListener('click', LibraryController.closeModal);

    var modalForm = document.querySelector(".add");
    modalForm.addEventListener('click', LibraryController.addBook);

    var filter = document.querySelector(".filter");
    filter.addEventListener('click', LibraryController.filter);

    function calculateRating(rating, elem){
        const starTotal = 5;
    
        const starPercentage = rating / starTotal * 100;
        const starPercentageRounded = Math.round(starPercentage / 10) * 10 - 1 + "%";
        elem.style.width = starPercentageRounded;
    
    }
    
    function createBook(obj){
            const book = document.createElement("div");
            book.className = "library__item book";
    
            const bookImg = document.createElement("img");
            bookImg.className = "book__img";

            let link;
            if(obj.image_url){
                link = obj.image_url;
            } else {
                link = "https://rsu-library-api.herokuapp.com/static/images/nocover.jpg";
            }
            
            bookImg.setAttribute("src", link);
            book.appendChild(bookImg);
    
            const bookTitle = document.createElement("span");
            bookTitle.className = "book__title";
            bookTitle.innerHTML = obj.title;
            book.appendChild(bookTitle);
    
            const boorAuthor = document.createElement("span");
            boorAuthor.className = "book__author";
            boorAuthor.innerHTML = "by " + obj.author.firstName + ' ' + obj.author.lastName;
            book.appendChild(boorAuthor);
    
            const bookRating = document.createElement("div");
            bookRating.className = "book__rating";
            book.appendChild(bookRating);
    
            
            for(let i = 5; i > 0; i--){
                const radio = document.createElement("input");
                radio.className = "book__rating--input";
                radio.setAttribute('id', obj.title + "-" + i);
                radio.setAttribute('type', 'radio');
                radio.setAttribute('name', 'rating');
                radio.setAttribute("data-value", i);
    
    
                const star = document.createElement('label');
                star.className = "book__rating--star fa fa-star-o";
                star.setAttribute('for', obj.title + "-" + i);
    
                bookRating.appendChild(radio);
                bookRating.appendChild(star);
            }
    
            const bookRatingInner = document.createElement("div");
            bookRatingInner.className = "book__rating--inner";
            bookRating.appendChild(bookRatingInner);
    
            calculateRating(obj.rating, bookRatingInner);
    
            return book;
    }
    
    function showLibrary(obj){
        const library = document.querySelector('.library');
        library.innerHTML = '';
    
        obj.forEach(function(item){
            const bookItem = createBook(item);
            bookItem.setAttribute("data-id", item.id);
            library.appendChild(bookItem);
        });
    }

    return {
            showLibrary,
            createBook,
            calculateRating,
        }
})(LibraryController, Utils);