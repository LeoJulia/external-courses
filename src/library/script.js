const BOOKS = [
    {
        img: 'jewels.png',
        title: 'Jewels of Nizam',
        author: 'Geeta Devi',
        rating: 5
    },
    {
        img: 'cakes.png',
        title: 'Cakes & Bakes',
        author: 'Sanjeev Kapoor',
        rating: 5
    },
    {
        img: 'jamie.png',
        title: 'Jamie’s Kitchen',
        author: 'Jamie Oliver',
        rating: 4.5
    },
    {
        img: 'inexpensive.png',
        title: 'Inexpensive Family Meals',
        author: 'Simon Holst',
        rating: 4
    },
    {
        img: 'paleo.png',
        title: 'Paleo Slow Cooking',
        author: 'Chrissy Gower',
        rating: 4.5
    },
    {
        img: 'cook.png',
        title: 'Cook Like an Italian',
        author: 'Tobie Puttock',
        rating: 4
    },
    {
        img: 'suneeta.png',
        title: 'Suneeta Vaswani',
        author: 'Geeta Devi',
        rating: 5
    },
    {
        img: 'does.png',
        title: 'Jamie Does',
        author: 'Jamie Oliver',
        rating: 4
    },
    {
        img: 'italy.png',
        title: 'Jamie’s italy',
        author: 'Jamie Oliver',
        rating: 5
    },
    {
        img: 'vegetables.png',
        title: 'Vegetables Cookbook',
        author: 'Matthew Biggs',
        rating: 3.5
    }
]

var id, value;

function rating(){
    var starTotal = 5;

    for (var i = 0; i < BOOKS.length; i++) {
        var starPercentage = BOOKS[i].rating / starTotal * 100;
        var starPercentageRounded = Math.round(starPercentage / 10) * 10 - 1 + "%";
        document.getElementsByClassName("book__rating--inner")[i].style.width = starPercentageRounded;
    }
}

function book(obj){
        var book = document.createElement("div");
        book.className = "library__item book";

        var bookImg = document.createElement("img");
        bookImg.className = "book__img";
        var link = "./img/books/" + obj.img;
        bookImg.setAttribute("src", link);
        book.appendChild(bookImg);

        var bookTitle = document.createElement("span");
        bookTitle.className = "book__title";
        bookTitle.innerHTML = obj.title;
        book.appendChild(bookTitle);

        var boorAuthor = document.createElement("span");
        boorAuthor.className = "book__author";
        boorAuthor.innerHTML = "by " + obj.author;
        book.appendChild(boorAuthor);

        var bookRating = document.createElement("div");
        bookRating.className = "book__rating";
        book.appendChild(bookRating);

        
        for(var i = 5; i > 0; i--){
            var radio = document.createElement("input");
            radio.className = "book__rating--input";
            radio.setAttribute('id', obj.title + "-" + i);
            radio.setAttribute('type', 'checkbox');
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

        return book;
}

function library(){
    var library = document.createElement("div");
    library.className = "library";

    for(var i = 0; i < BOOKS.length; i++){
        var bookItem = book(BOOKS[i]);
        bookItem.setAttribute("data-id", i);
        library.appendChild(bookItem);
    }

    document.getElementsByTagName("main")[0].appendChild(library);

    return library;
}

document.addEventListener("DOMContentLoaded", library);
document.addEventListener("DOMContentLoaded", rating);

var divLibrary = document.querySelector(".library");
