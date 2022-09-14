var zoomImage = window.location.search.substring(1).split('=')[1];
var closeWindowBtn = document.querySelector(".close-window");
var addFavoritesBtn = document.querySelector('.add-favorites');

function showImage() {
    document.getElementById("newImage").src = zoomImage; 
}

function closeWindow() {
    window.close();
}

function addFavorites() {
    window.opener.postMessage(zoomImage, '*');
}

if (closeWindowBtn.addEventListener) {
    closeWindowBtn.addEventListener("click", closeWindow, false);
} else if (closeWindowBtn.attachEvent) {
    closeWindowBtn.attachEvent("onclick", closeWindow);
}

if (addFavoritesBtn.addEventListener) {
    addFavoritesBtn.addEventListener("click", addFavorites, false);
} else if (addFavoritesBtn.attachEvent) {
    addFavoritesBtn.attachEvent("onclick", addFavorites);
}

function setUpPage() {
    showImage();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent)  {
    window.attachEvent("onload", setUpPage);
}
