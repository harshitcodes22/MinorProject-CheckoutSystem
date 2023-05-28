"use strict";

const btnAll = document.querySelectorAll(".btn");
const items = document.querySelector(".span-items");
const price = document.querySelector(".span-price");
const cardPrice = document.querySelectorAll(".cards-price");
const emptyCart = document.querySelector(".emptyCart");
const displayItem = document.querySelector(".itemDisplay");
// console.log(cardPrice);
// console.log(cardPrice[0].dataset.versionNumber);
let counter = 0;
let sum = 0;
let cost;
btnAll.forEach(function (e) {
  e.addEventListener("click", function (el) {
    if (e.classList.contains("btn-main")) {
      counter++;
      items.textContent = `${counter}`;
      let version = e.dataset.versionNumber;
      // console.log(cardPrice[version - 1].dataset.versionValue);
      cost = cardPrice[version - 1].dataset.versionValue;
      sum += Number(cost);
      price.textContent = `${sum}`;
      displayItem.insertAdjacentHTML(
        "beforeend",
        `<div class="spacer"><span class='table-propri'>Product ${version}</span><span class='table-propri-price'>&#8377 ${cost}</span></div>`
      );
    }
  });
});

//adding event listener to empty cart button

emptyCart.addEventListener("click", function (e) {
  counter = 0;
  sum = 0;
  items.textContent = `${counter}`;
  price.textContent = `${sum}`;
  displayItem.textContent = "";
});
