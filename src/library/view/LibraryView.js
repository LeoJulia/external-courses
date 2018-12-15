let LibraryView = ((LibraryController) => {
    'use strict';

    let controller = LibraryController;

    let searcher = document.querySelector(".searcher__item");
    searcher.addEventListener('input', controller.handleChangeSearch);

    var modal = document.querySelector('.modal');
    controller.getModal(modal);

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    var btnOpenModal = document.querySelector(".sidebar__button");
    btnOpenModal.addEventListener('click', controller.openModal);

    var btnCloseModal = document.querySelector(".close");
    btnCloseModal.addEventListener('click', controller.closeModal);

    var modalForm = document.querySelector(".add");
    modalForm.addEventListener('click', controller.addBook);

    var filter = document.querySelector(".filter");
    filter.addEventListener('click', controller.filteringBook);

    let BOOKS;

    function init(){
        var xhr = new XMLHttpRequest();
  
        xhr.open("GET", "https://rsu-library-api.herokuapp.com/books", true);
    
        xhr.send();
    
        xhr.onload = function() {    
            try {
                BOOKS = JSON.parse(xhr.responseText);
            } catch (e) {
                console.log( "Некорректный ответ " + e.message );
            }
            
            controller.showLibrary(BOOKS);
        }
    }

    return {init: init}
})(LibraryController);