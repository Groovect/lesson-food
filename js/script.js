require('es6-promise').polyfill();

import tabs from "./modules/tabs";
import modal, { openModal } from "./modules/modal";
import timer from "./modules/timer";
import slider from "./modules/slider";
import forms from "./modules/forms";
import cards from "./modules/cards";
import calculator from "./modules/calculator";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 50000);

  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2023-06-12");
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner"
  });
  forms("form", modalTimerId);
  cards();
  calculator();
});