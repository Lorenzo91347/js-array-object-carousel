'use strict'

//Array creation and images container/buttons fetching,currentItem set

const carItems = [

    {
        imgUrl: '01.jpg',
        title: 'The Lake',
        desc: 'A man sitting on the pontoons'

    },
    {
        imgUrl: '02.jpg',
        title: 'The Lake Town',
        desc: 'A tranquil village sitting on the shores'

    },
    {
        imgUrl: '03.jpg',
        title: 'Big Ben',
        desc: 'A view of the historical center of London'

    },
    {
        imgUrl: '04.jpg',
        title: 'The Palace',
        desc: 'Stately buildings by night'

    },
    {
        imgUrl: '05.jpg',
        title: 'The Beach',
        desc: 'Tropical scenery on a far island'

    }
]
const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carTitle = document.querySelector('.title');
const carDesc = document.querySelector('.desc');
let currentItem = 0;
console.log(carItems.title)

/*Creation of images and respective containers in Html using a counter,
selection of all .item elements under one variable */

for (let i = 0; i < carItems.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item');

    if (i === currentItem) {
        item.classList.add('active');
        carTitle.append(carItems[i].title)
        carDesc.append(carItems[i].desc)
    }

    const img = document.createElement('img');
    img.src = `img/${carItems[i].imgUrl}`;

    item.append(img);
    items.append(item);

}

const pageItems = document.querySelectorAll('.item');

/*eventListeners to switch the .active class progressively up
or down on the .item class divs,depending on the button element pressed */


prev.addEventListener('click', function () {
    if (currentItem > 0) {
        pageItems[currentItem].classList.remove('active');
        carTitle[currentItem].remove(carItems[currentItem].title)
        currentItem--;
        pageItems[currentItem].classList.add('active');
        carTitle[currentItem].append(carItems[currentItem].title)

    }
});
next.addEventListener('click', function () {
    if (currentItem < pageItems.length - 1) {
        pageItems[currentItem].classList.remove('active');
        currentItem++;
        pageItems[currentItem].classList.add('active');

    }
});

function test() {

    if (currentItem < pageItems.length - 1) {
        pageItems[currentItem].classList.remove('active');
        currentItem++;
        pageItems[currentItem].classList.add('active');
        console.log('Image switched!')
        console.log(pageItems.length);
        console.log(currentItem)
    }
    else if (currentItem === pageItems.length) {
        pageItems[currentItem].classList.remove('active');
        currentItem === pageitems[0];
        pageItems[currentItem].classList.add('active');
        console.log('now its going back!')
    }
};



//setInterval(test, 3000);






