"use strict";

import {pizzaList} from './listOfPizzasAndCompozitions.js';
// import {compositionList} from './listOfPizzasAndCompozitions.js';

// console.log(pizzaList);
// console.log(compositionList);

const renderCard = (product) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.id = `product${product.id}`;

    const visual = document.createElement('div');
    visual.className = 'visual';
    card.appendChild(visual);

    // img
    const img = document.createElement('img');
    img.src = `images/${product.id}.jpg`;
    img.alt = 'image description';
    visual.appendChild(img);

    // holder text
    const text = document.createElement('div');
    text.className = 'text';
    card.appendChild(text);

    // h4
    const h4 = document.createElement('h4');
    h4.className = 'title';
    h4.innerText = product.name;
    text.appendChild(h4);

    // p
    const p = document.createElement('p');
    p.innerText = product.composition.join(', ');
    text.appendChild(p);
    // span
    const span = document.createElement('span');
    span.className = 'caloricity';
    span.innerText = `${product.caloricity} Cal.`;
    text.appendChild(span);
    // price
    const price = document.createElement('strong');
    price.className = 'price';
    price.innerText = `${product.price} грн.`;
    text.appendChild(price);

    // on hover cover
    const coverOnHover = document.createElement('div');
    coverOnHover.className = 'on-hover';
    text.appendChild(coverOnHover);

    // button
    const button = document.createElement('button');
    button.className = 'btn btn-info';
    button.innerText = 'заказать';

    coverOnHover.appendChild(button);

    getHeight();
    return card;
};

window.addEventListener("resize", function () {
    getHeight();
});

function getHeight() {
    let imgArr = document.querySelectorAll(".visual");

    if(window.innerWidth > 575) {
        imgArr.forEach((item, i) => {
            item.style.height = item.offsetWidth + 'px';
        });
    } else {
        imgArr.forEach((item, i) => {
            item.style.height = '';
        });
    }
}

const renderMain = (arrayOfUsers) => {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = "";

    // section
    const section = document.createElement('section');
    section.className = 'section-products py-5';
    mainElement.appendChild(section);

    // container
    const container = document.createElement('div');
    container.className = 'container';
    section.appendChild(container);

    // row
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    for (let product of arrayOfUsers) {
        const card = renderCard(product);
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-4 col-lg-3';
        // row.appendChild(card)
        row.appendChild(col);
        col.appendChild(card);
    }
};

renderMain(pizzaList);

const inp = document.getElementById('input-search');
let form = document.getElementById("form-search");

function updatePizzaList(e) {
    e.preventDefault();
    renderMain(pizzaList.filter(product => product.name.toLowerCase().includes(inp.value.toLowerCase() || inp.value.toUpperCase())));
}

form.addEventListener('submit', updatePizzaList);

const select = document.getElementById('select-sort');

select.onchange = function () {
    let sorted = [...pizzaList];
    sorted.sort((a, b) => {
        if (this.value === 'asc') return a.price > b.price ? 1 : -1;  // по возрастанию
        if (this.value === 'desc') return a.price > b.price ? -1 : 1;  // по убыванию
        if (this.value === 'asc' || this.value === 'desc' && a.price === b.price) return 0;
    });
    renderMain(sorted);
};

