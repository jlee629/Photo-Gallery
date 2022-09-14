var photoOrder = [1,2,3,4,5],
    figureCount = 3;

function populateFigures() {
    var imageName;
    var currentFig;
    if (figureCount == 3) {
        for (var i = 1; i < figureCount + 1; i++) {
            imageName = 'images/' + photoOrder[i] + '.jpeg';
            currentFig = document.getElementsByTagName('img')[i-1];
            currentFig.src = imageName;
        }
    } else {
        for (var i = 0; i < photoOrder.length; i++) {
            imageName = 'images/' + photoOrder[i] + '.jpeg';
            currentFig = document.getElementsByTagName('img')[i];
            currentFig.src = imageName;
        }
    }
}

function rightArrow() {
    for (var i = 0; i < 5; i++) {
        if (photoOrder[i] === photoOrder.length) {
            photoOrder[i] = 1;
        } else {
            photoOrder[i] += 1;
        }
        populateFigures();
    }
}

function leftArrow() {
    for (var i = 0; i < 5; i++) {
        if ((photoOrder[i]) === 1) {
            photoOrder[i] = 5;
        } else {
            photoOrder[i] -= 1;
        }
        populateFigures();
    }
}

function showFive() {
    figureCount = 5;
    var spinnerFive = document.querySelector('.spinner');
    var firstFigure = document.createElement('figure');
    firstFigure.id = 'fig1';
    firstFigure.style.zIndex = '5';
    firstFigure.style.position = 'absolute';
    firstFigure.style.left = '55px';
    firstFigure.style.top = '110px';
    var firstImage = document.createElement('img');
    firstImage.width = '200';
    firstImage.height = '200';
    firstFigure.appendChild(firstImage);
    spinnerFive.insertBefore(firstFigure, document.getElementById('fig2'));

    var fifthFigure = document.createElement('figure');
    fifthFigure.id = 'fig5';
    fifthFigure.style.zIndex = '5';
    fifthFigure.style.position = 'absolute';
    fifthFigure.style.right = '50px';
    fifthFigure.style.top = '110px';
    var fifthImage = document.createElement('img');
    fifthImage.width = '200';
    fifthImage.height = '200';
    fifthFigure.appendChild(fifthImage);
    spinnerFive.insertBefore(fifthFigure, document.getElementById('rightarrow')); 

    document.getElementsByTagName('img')[0].src = 'images/' + photoOrder[0] + '.jpeg';
    document.getElementsByTagName('img')[4].src = 'images/' + photoOrder[4] + '.jpeg';

    var numBtn = document.querySelector('#fiveButton .showBtn');
    numBtn.innerHTML = 'Show less';
    if (numBtn.addEventListener) {
        numBtn.removeEventListener('click', showFive, false);
        numBtn.addEventListener('click', showThree, false);
    } else if (numBtn.attachEvent) {
        numBtn.detachEvent('onclick', showFive);
        numBtn.attachEvent('onclick', showThree);
    }
}

function showThree() {
   figureCount = 3;

   var spinnerThree = document.querySelector('.spinner');
   var numBtn = document.querySelector('#fiveButton .showBtn');
   spinnerThree.removeChild(document.getElementById('fig1'));
   spinnerThree.removeChild(document.getElementById('fig5'));
   numBtn.innerHTML = 'Show more';
   if (numBtn.addEventListener) {
       numBtn.removeEventListener('click', showThree, false);
       numBtn.addEventListener('click', showFive, false);
    } else if (numBtn.attachEvent) {
        numBtn.detachEvent('onclick', showThree);
        numBtn.attachEvent('onclick', showFive);
    }
}

function zoomImage() {
    var index;
    if(figureCount == 3)
    {
        index = 1;
    } else {
        index = 2;
    }
     
    var mainImage = document.getElementsByTagName("img")[index];
    var zoomWindow = window.open('assignment3_zoom.html?index='+mainImage.src, 'zoomwin', 'width=790, height=760');
    zoomWindow.focus();
}

var rightarrow = document.getElementById('rightarrow');
if (rightarrow.addEventListener) {
    rightarrow.addEventListener('click', rightArrow, false);
} else if (rightarrow.attachEvent)  {
    rightarrow.attachEvent('onclick', rightArrow);
}

var leftarrow = document.getElementById('leftarrow');
if (leftarrow.addEventListener) {
    leftarrow.addEventListener('click', leftArrow, false);
} else if (leftarrow.attachEvent)  {
    leftarrow.attachEvent('onclick', leftArrow);
}

var showAllButton = document.querySelector('#fiveButton .showBtn');
if (showAllButton.addEventListener) {
    showAllButton.addEventListener('click', showFive,
    false);
} else if (showAllButton.attachEvent) {
    showAllButton.attachEvent('onclick', showFive);
}

var mainImage = document.getElementsByTagName('img')[1];
if (mainImage.addEventListener) {
    mainImage.addEventListener('click', zoomImage, false);
} else if (mainImage.attachEvent)  {
    mainImage.attachEvent('onclick', zoomImage);
}

window.addEventListener('message', function(e) {
    var favorites = document.getElementById('favorites');

    var div = document.createElement('div');
    favorites.appendChild(div);

    var img = document.createElement('img');
    img.src = e.data;
    img.width = 170;
    img.style.verticalAlign = 'top';
    img.style.cursor = 'pointer';
    div.appendChild(img);
    var div2 = document.createElement('div');
    div.appendChild(div2);

    div2.style.display = 'none';

    var button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Delete';
    button.addEventListener('click', function() {
    favorites.removeChild(div);
    })
    div2.appendChild(button);        

    if (favorites.children.length > 6) {
        window.alert('You can add up to five pictures. \nClick on each favorite picture on the list to create a delete button.');
        favorites.removeChild(div);
    }

    if(img.addEventListener) {
        img.addEventListener('click', function(){
            if(div2.style.display == 'none') {
                div2.style.display = 'block';
            } else {
                div2.style.display = 'none';
            }
        }, false)
    } else if (img.attachEvent) {
        img.attachEvent('onclick', function(){
            if(div2.style.display == 'none') {
                div2.style.display = 'block';
            } else {
                div2.style.display = 'none';
            }
        })
    }
});

function setUpPage() {
    populateFigures();
}

if (window.addEventListener) {
window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}