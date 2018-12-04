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

function rating(){
    var starTotal = 5;

    for (var i = 0; i < BOOKS.length; i++) {
        var starPercentage = BOOKS[i].rating / starTotal * 100;
        var starPercentageRounded = Math.round(starPercentage / 10) * 10 + "%";
        document.getElementsByClassName("book__rating--inner")[i].style.width = starPercentageRounded;
    }
}

function library(){
    var library = document.createElement("div");
    library.className = "library";

    for(var i = 0; i < BOOKS.length; i++){
        var book = document.createElement("div");
        book.className = "library__item book";

        var bookImg = document.createElement("img");
        bookImg.className = "book__img";
        var link = "./img/books/" + BOOKS[i].img;
        bookImg.setAttribute("src", link);
        book.appendChild(bookImg);

        var bookTitle = document.createElement("span");
        bookTitle.className = "book__title";
        bookTitle.innerHTML = BOOKS[i].title;
        book.appendChild(bookTitle);

        var boorAuthor = document.createElement("span");
        boorAuthor.className = "book__author";
        boorAuthor.innerHTML = "by " + BOOKS[i].author;
        book.appendChild(boorAuthor);

        var bookRating = document.createElement("div");
        bookRating.className = "book__rating";
        book.appendChild(bookRating);

        
        for(var j = 0; j < 5; j++){
            var star = document.createElement("i");
            star.className = "book__rating--star fa fa-star-o";
            star.setAttribute("data-id", j + 1);
            bookRating.appendChild(star);// last end
        }

        var bookRatingInner = document.createElement("div");
        bookRatingInner.className = "book__rating--inner";
        bookRating.appendChild(bookRatingInner);

        library.appendChild(book);
    }

    document.getElementsByTagName("main")[0].appendChild(library);
}

document.addEventListener("DOMContentLoaded", library);
document.addEventListener("DOMContentLoaded", rating); // unfinished, need hover