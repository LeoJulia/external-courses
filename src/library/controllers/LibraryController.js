let LibraryController = ((Utils) => {
    'use strict';
    let utils = Utils;
    
    let BOOKS;
    
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
        BOOKS = obj;
        const library = document.querySelector('.library');
        library.innerHTML = '';
    
        obj.forEach(function(item){
            const bookItem = createBook(item);
            bookItem.setAttribute("data-id", item.id);
            library.appendChild(bookItem);
        });
    }

    function handleChangeSearch(event){

        const library = document.querySelector('.library');
    
        const value = event.target.value.toLowerCase();
    
        const result = BOOKS.filter(function(item){
            if(item.title.toLowerCase().indexOf(value) !== -1 ||
                 item.author.firstName.toLowerCase().indexOf(value) !== -1 ||
                 item.author.lastName.toLowerCase().indexOf(value) !== -1){
                return item;
            }
        });
    
        library.innerHTML = '';
    
        result.forEach(function(item){
            const bookItem = createBook(item);
            bookItem.setAttribute("data-id", item.id);
            library.appendChild(bookItem);
        })
    }

    let modalWindow;

    function getModal(modal){
        modalWindow = modal;
    }

    function openModal() {
        modalWindow.style.display = "block";
    }

    function closeModal() {
        modalWindow.style.display = "none";
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
        addHistory();
        showLibrary(BOOKS);
        showNotification();
    }

    function filteringBook(){
        var target = event.target;
        var library = document.querySelector(".library");
        library.innerHTML = "";
    
        this.showAll = function(){
            showLibrary(BOOKS);
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

    var HISTORY = [];

    function addHistory(){

        var titleInput = document.querySelectorAll(".modal__form--input")[0];
        var author = document.querySelectorAll(".modal__form--input")[1];

        var notification = {
            title: titleInput.value,
            author: {
                firstName: author.value.split(' ')[0] || '',
                lastName: author.value.split(' ')[1] || ''
            },
            createdAt: new Date().getTime()
        }

        HISTORY.push(notification);
    }

    function createNotification(obj){
        var notification = document.createElement("div");
        notification.className = "sidebar__history";

        var icon = document.createElement("i");
        icon.className = "sidebar__history-icon fa fa-clock-o";
        icon.setAttribute("aria-hidden", "true");

        notification.appendChild(icon);

        var notificationMessege = document.createElement("span");
        notificationMessege.className = "sidebar__history-text";

        var notificationBook = document.createElement("span");
        notificationBook.className = "sidebar__history-text--bold";
        notificationBook.innerHTML = obj.title;

        var notificationAuthor = document.createElement("span");
        notificationAuthor.className = "sidebar__history-text--bold";
        notificationAuthor.innerHTML = obj.author.firstName + ' ' + obj.author.lastName;

        notificationMessege.innerHTML = "You added ";
        notificationMessege.appendChild(notificationBook);
        notificationMessege.innerHTML += " by ";
        notificationMessege.appendChild(notificationAuthor);

        notification.appendChild(notificationMessege);

        var notificationTime = document.createElement("span");
        notificationTime.className = "sidebar__history-time";

        notificationTime.innerHTML = utils.getTimeAgo(obj.createdAt) + ' ago';

        notification.appendChild(notificationTime);

        return notification;
    }

    function showNotification(){
        var history = document.querySelector(".history");
        history.innerHTML = "";
    
        HISTORY.forEach(function(item, i, arr){
            if(i === arr.length - 1){
                history.appendChild(createNotification(item));
            }
            if(i === arr.length - 2){
                history.appendChild(createNotification(item));
            }
        })
    }

    setInterval(showNotification, 30000);

    return{
        showLibrary: showLibrary,
        createBook: createBook,
        handleChangeSearch: handleChangeSearch,
        addBook: addBook,
        openModal: openModal,
        closeModal: closeModal,
        getModal: getModal,
        filteringBook: filteringBook,
        addHistory: addHistory,
        createNotification: createNotification,
        showNotification: showNotification
    }
  })(Utils);