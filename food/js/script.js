require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2024-08-31');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});

// getResource("http://localhost:3000/menu").then((data) => createCard(data));

// function createCard(data) {
//   data.forEach(({ img, altimg, title, descr, price }) => {
//     const element = document.createElement("div");

//     element.classList.add("menu__item");

//     element.innerHTML = `
//             <img src=${img} alt=${altimg}>
//             <h3 class="menu__item-subtitle">${title}</h3>
//             <div class="menu__item-descr">${descr}</div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total"><span>${price*27}</span> грн/день</div>
//             </div>
//           `;
//     document.querySelector(".menu .container").append(element);
//   });
// }

// axios.get("http://localhost:3000/menu").then((data) => {
//   data.data.forEach(({ img, altimg, title, descr, price }) => {
//     new MenuCard(
//       img,
//       altimg,
//       title,
//       descr,
//       price,
//       ".menu .container"
//     ).render();
//   });
// });

// showSlides(sliderIndex);

//   if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
//   } else {
//     total.textContent = slides.length;
//   }

// function showSlides(n) {
//   if (n > slides.length) {
//     sliderIndex = 1;
//   }

//   if (n < 1) {
//     sliderIndex = slides.length;
//   }

//   slides.forEach(item => item.style.display = 'none');
//   slides[sliderIndex - 1].style.display = 'block';

//   if (slides.length < 10) {
//     current.textContent = `0${sliderIndex}`;
//   } else {
//     current.textContent = sliderIndex;
//   }

// }

// function plusSlides(n) {
//   showSlides(sliderIndex += n);
// }

// prev.addEventListener('click', () => {
//   plusSlides(-1);
// });

// next.addEventListener('click', () => {
//   plusSlides(1);
// });

// npx json-server --watch db.json
// json-server --watch db.json --port 3000
// npx json-server db.json     рабочая
// npm install json-server -g --save-dev
// // npx json-server db.json     рабочая
