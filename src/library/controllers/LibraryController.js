let LibraryController = ((LibraryModel, Utils) => {
    'use strict';
    
    let View;

    function setView(view){
        View = view;
    }

    function showBooks(){
        LibraryModel.getBooks(LibraryView.showLibrary);
    }

    function search(event){
        LibraryModel.handleChangeSearch(event, View.showLibrary);
    }

    function addBook(){
        let titleInput = View.elements.titleInput;
        let author = View.elements.author;
    
        let book = {
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
    
        LibraryModel.setBooks(book, View.showLibrary);
        View.closeModal();
        addHistory();
        showNotification();
    }

    function filter(){
        LibraryModel.filteringBook(View.showLibrary);
    }

    function addHistory(){

        let titleInput = View.elements.titleInput;
        let author = View.elements.author;

        let notification = {
            title: titleInput.value,
            author: {
                firstName: author.value.split(' ')[0] || '',
                lastName: author.value.split(' ')[1] || ''
            },
            createdAt: new Date().getTime()
        }

        LibraryModel.HISTORY.push(notification);
    }

    function createNotification(obj){
        let notification = document.createElement("div");
        notification.className = "sidebar__history";

        let icon = document.createElement("i");
        icon.className = "sidebar__history-icon fa fa-clock-o";
        icon.setAttribute("aria-hidden", "true");

        notification.appendChild(icon);

        let notificationMessege = document.createElement("span");
        notificationMessege.className = "sidebar__history-text";

        let notificationBook = document.createElement("span");
        notificationBook.className = "sidebar__history-text--bold";
        notificationBook.innerHTML = obj.title;

        let notificationAuthor = document.createElement("span");
        notificationAuthor.className = "sidebar__history-text--bold";
        notificationAuthor.innerHTML = obj.author.firstName + ' ' + obj.author.lastName;

        notificationMessege.innerHTML = "You added ";
        notificationMessege.appendChild(notificationBook);
        notificationMessege.innerHTML += " by ";
        notificationMessege.appendChild(notificationAuthor);

        notification.appendChild(notificationMessege);

        let notificationTime = document.createElement("span");
        notificationTime.className = "sidebar__history-time";

        notificationTime.innerHTML = Utils.setTimeAgo(obj.createdAt) + ' ago';

        notification.appendChild(notificationTime);

        return notification;
    }

    function showNotification(){
        let history = View.elements.history;
        history.innerHTML = "";
    
        LibraryModel.HISTORY.forEach(function(item, i, arr){
            if(i === arr.length - 1 || i === arr.length - 2){
                history.appendChild(createNotification(item));
            }
        })
    }

    setInterval(showNotification, 30000);

    return{
        search,
        addBook,
        filter,
        addHistory,
        createNotification,
        showNotification,
        setView,
        showBooks
    }
  })(LibraryModel, Utils);