"use strict";

// import {pizzaList} from './listOfPizzasAndCompozitions.js';
// import {compositionList} from './listOfPizzasAndCompozitions.js';
console.log(pizzaList)




//
// pizzaStorage.putProducts('2');
// pizzaStorage.putProducts('7');
// pizzaStorage.putProducts('23');
// pizzaStorage.putProducts('5');
// const a = pizzaStorage.getProducts();
//
// console.log(a);




//

//
// // console.log(createCol('sm', 8, 'md', 6));
// let createCol = (breakpoint, width, breakpoint1, width1, breakpoint2, width2) => {
//     let col = document.createElement('div');
//     col.className = `col-${breakpoint}-${width} col-${breakpoint1}-${width1} col-${breakpoint2}-${width2}`
//     return col;
// };
//
//
// const renderMain = (arrayOfUsers) => {
//     const main = document.querySelector('main');
//     main.innerHTML = "";
//
//     // section
//     const section = document.createElement('section');
//     section.className = 'section-products py-3';
//     main.appendChild(section);
//
//     // container
//     const container = document.createElement('div');
//     container.className = 'container';
//     section.appendChild(container);
//
//     // row
//     const row = document.createElement('div');
//     row.className = 'row';
//     container.appendChild(row);
//
//     for (let product of arrayOfUsers) {
//         const card = renderCard(product);
//         const col = document.createElement('div');
//         col.className = 'col-md-6 col-lg-4 col-xl-3';
//         // row.appendChild(card)
//         row.appendChild(col);
//         col.appendChild(card);
//     }
//
//     renderSidebar(pizzaList, main);
// };
//
// const renderSidebar = (arrayOfUsers, main, modal) => {
//
//     // console.log(main)
//
//
//     //btnCreateProduct
//     const btnCreateProduct = document.createElement('button');
//     btnCreateProduct.className = 'btn btn-info btn-create';
//     btnCreateProduct.innerText = 'Создать пиццу';
//     aside.appendChild(btnCreateProduct);
//     btnCreateProduct.onclick = function () {
//         renderModal();
//
//     };
// };
//

//
// const renderFormCreate = (modal) => {
//     const title = document.createElement("h3");
//     title.innerText = "Создание пиццы";
//     modal.appendChild(title);
//
//     const formCreate = document.createElement("form");
//     formCreate.className = "form-create form-control";
//     formCreate.addEventListener('submit', function (e) {
//         e.preventDefault();
//         let labels = formCreate.querySelectorAll('.label-compos');
//         let checkboxes = formCreate.querySelectorAll('.form-check-label');
//         let composArr;
//         composArr = checkboxes.map(function (el) {
//             return composArr
//         });
//
//
//         let a = new Pizza(inpName.value, inpPrice.value, composArr);
//         console.log(a);
//     });
//     modal.appendChild(formCreate);
//
//     // лейбл ИМЕНИ
//     const labelName = document.createElement("label");
//     labelName.innerText = 'Название';
//     labelName.htmlFor = "name-pizza";
//     formCreate.appendChild(labelName);
//     // инпут ИМЕНИ
//     const inpName = document.createElement("input");
//     // inpName.placeholder = "";
//     inpName.type = "text";
//     inpName.id = labelName.htmlFor;
//     formCreate.appendChild(inpName);
//
//     // лейбл ЦЕНЫ
//     const labelPrice = document.createElement("label");
//     labelPrice.innerText = 'Стоимость';
//     labelPrice.htmlFor = "price-pizza";
//     formCreate.appendChild(labelPrice);
//
//     // инпут ЦЕНЫ
//     const inpPrice = document.createElement("input");
//     inpPrice.placeholder = "Стоимость";
//     inpPrice.type = "text";
//     inpPrice.id = labelPrice.htmlFor;
//     formCreate.appendChild(inpPrice);
//
//     const titleCheckboxes = document.createElement("h6");
//     titleCheckboxes.innerText = "Выберите ингредиенты";
//     formCreate.appendChild(titleCheckboxes);
//     let myCompos = [];
//     const createCheckCompos = (arr) => {
//         arr.forEach((el) => {
//             let checkCompos = document.createElement("input");
//             checkCompos.className = 'form-check-label';
//             checkCompos.name = `${el.id}`;
//             checkCompos.type = "checkbox";
//             checkCompos.id = `id-0${el.id}`;
//             formCreate.appendChild(checkCompos);
//
//             const label = document.createElement("label");
//             label.className = 'label-compos';
//             label.innerText = el.name;
//             label.htmlFor = `id-0${el.id}`;
//             formCreate.appendChild(label);
//             // return console.log(checkCompos);
//
//         });
//     };
//
//     createCheckCompos(compositionList);
//
//     // let myCompos = .map();
//     // console.log(myCompos)
//
//
//
//     const btnCreatePizza = document.createElement('button');
//     btnCreatePizza.type = "submit";
//     btnCreatePizza.innerText = 'Создать';
//     formCreate.appendChild(btnCreatePizza);
// };
// renderMain(pizzaList);
//
// class Pizza {
//     constructor(name, price, composition) {
//         this.name = name;
//         this.price = price;
//         this.composition = composition;
//     }
// }
//
// // let my = new Pizza("andro", 23, "лук морковь суп ложка спички");
// // console.log(my)
//
// // function createPizza(e) {
// //     e.preventDefault();
// //     new Pizza("andro", 23, "лук морковь суп ложка спички");
// // }
// const inp = document.getElementById('input-search');
// let form = document.getElementById("form-search");
//
//
//
// function updatePizzaList(e) {
//     e.preventDefault();
//     renderMain(pizzaList.filter(product => product.name.toLowerCase().includes(inp.value.toLowerCase() || inp.value.toUpperCase())));
// }
//
// form.addEventListener('submit', updatePizzaList);
//
// const select = document.getElementById('select-sort');
//
// select.onchange = function () {
//     let sorted = [...pizzaList];
//     sorted.sort((a, b) => {
//         if (this.value === 'asc') return a.price > b.price ? 1 : -1;  // по возрастанию
//         if (this.value === 'desc') return a.price > b.price ? -1 : 1;  // по убыванию
//         if (this.value === 'asc' || this.value === 'desc' && a.price === b.price) return 0;
//     });
//     renderMain(sorted);
// };

