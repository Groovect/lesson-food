/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

  window.addEventListener("DOMContentLoaded", function() {

    // Tabs
      
    let tabs = document.querySelectorAll(".tabheader__item"),
      tabsContent = document.querySelectorAll(".tabcontent"),
      tabsParent = document.querySelector(".tabheader__items");
  
    function hideTabContent() {
          
      tabsContent.forEach(item => {
        item.classList.add("hide");
        item.classList.remove("show", "fade");
      });
  
      tabs.forEach(item => {
        item.classList.remove("tabheader__item_active");
      });
    }
  
    function showTabContent(i = 0) {
      tabsContent[i].classList.add("show", "fade");
      tabsContent[i].classList.remove("hide");
      tabs[i].classList.add("tabheader__item_active");
    }
      
    hideTabContent();
    showTabContent();
  
    tabsParent.addEventListener("click", function(event) {
      const target = event.target;
      if(target && target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
      
    // Timer
  
    const deadline = "2023-06-11";
  
    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor( (t/(1000*60*60*24)) ),
        seconds = Math.floor( (t/1000) % 60 ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        hours = Math.floor( (t/(1000*60*60) % 24) );
  
      return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
      };
    }
  
    function getZero(num){
      if (num >= 0 && num < 10) { 
        return "0" + num;
      } else {
        return num;
      }
    }
  
    function setClock(selector, endtime) {
  
      const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);
  
      updateClock();
  
      function updateClock() {
        const t = getTimeRemaining(endtime);
  
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
  
        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      }
    }
  
    setClock(".timer", deadline);
  
    // Modal
  
    const modalTrigger = document.querySelectorAll("[data-modal]"),
      modal = document.querySelector(".modal");
  
    modalTrigger.forEach(btn => {
      btn.addEventListener("click", openModal);
    });
  
    function closeModal() {
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  
    function openModal() {
      modal.classList.add("show");
      modal.classList.remove("hide");
      document.body.style.overflow = "hidden";
      clearInterval(modalTimerId);
    }
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.getAttribute("data-close") == "") {
        closeModal();
      }
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape" && modal.classList.contains("show")) { 
        closeModal();
      }
    });
  
    const modalTimerId = setTimeout(openModal, 50000);
    // Закомментировал, чтобы не отвлекало
  
    function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
      }
    }
    window.addEventListener("scroll", showModalByScroll);
  
    // Используем классы для создание карточек меню
  
    class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 75;
        this.changeToUAH(); 
      }
  
      changeToUAH() {
        this.price = this.price * this.transfer; 
      }
  
      render() {
        const element = document.createElement("div");
  
        if (this.classes.length === 0) {
          this.classes = "menu__item";
          element.classList.add(this.classes);
        } else {
          this.classes.forEach(className => element.classList.add(className));
        }
  
        element.innerHTML = `
                  <img src=${this.src} alt=${this.alt}>
                  <h3 class="menu__item-subtitle">${this.title}</h3>
                  <div class="menu__item-descr">${this.descr}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                      <div class="menu__item-cost">Цена:</div>
                      <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                  </div>
              `;
        this.parent.append(element);
      }
    }

    const getResource = async (url) => {
      const res = await fetch(url);

      if(!res.ok) {
        throw new Error(`Couldn't fetch ${url}, status: ${res.status}`); //оператор throw отвезает за выброс ошибки, которую мы создаем
      }

      return await res.json();
    };

    getResource("http://localhost:3000/menu")
      .then(data => {
        data.forEach(({img, altimg, title, descr,  price}) => {
          new MenuCard(img, altimg, title, descr,  price, ".menu .container").render();
        });
      });

    // Forms
  
    const forms = document.querySelectorAll("form"),
        message = {
        loading: "icons/spinner.svg",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так..."
        };
  
    forms.forEach(item => {
      bindPostData(item);
    });

    // ф-я postData - асинхронный код и мы не знаем через какое время вернется ответ от сервера
    const postData = async (url, data) => { // url - адрес БД / data - данные, кот будут поститься
      const res = await fetch(url, { // посылает запрос на сервер, получает ответ / await явл временной паузой для дальнейшей отработки кода (30 сек стандарт максимум), после получения ответа, код продолжит выполняться
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: data
      });

      return await res.json(); // возвращаем промис для отработки через цепочку then и трансформируем в json / await нужен для того, чтобы если json объект большой, мы предоставили время для компиляции
    };
    
    function bindPostData(form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        let statusMessage = document.createElement("img");
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
          display: block;
          margin: 0 auto;
        `;
        form.insertAdjacentElement("afterend", statusMessage);
  
        // XMLHttpRequest - будет переписан на метод fetch
        // const request = new XMLHttpRequest(); // инициализация API
        // request.open("POST", "server.php"); // прописываем настройки API / async = true - стандартно
  
        // request.setRequestHeader("Content-type", "multipart/form-data"); / прописываем какой тип и что за данные отправятся на сервер / ОДНАКО в связке XMLHttpRequest и FormData заголовок прописывается автоматически и явно его указывать не нужно, так как запрос на сервер придет с ошибкой
        // ----------------------------------------------------------------------
        // ОТПРАВКА ДАННЫХ С ПОМОЩЬЮ JSON
        /* request.setRequestHeader("Content-type", "application/json");
        const formData = new FormData(form);
        const object = {};
        formData.forEach(function(value, key) {
          object[key] = value;
        });
        const json = JSON.stringify(object);
        request.send(json); */
        // -------------------------------------------------------------------------
  
        const formData = new FormData(form); // у input'ов обязательно должен быть атрибут name, иначе input не сможет отправить запрос / FormData - объект, представляющий данные HTML формы
        
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
  
        // отправка формы с данными для обратного звонка с пом fetch
        postData("http://localhost:3000/requests", json)
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        }).catch(() => { // если нужно будет расширить цепочку, просто добавляем .then и продолжаем
          showThanksModal(message.failure);
        }).finally(() => {
          form.reset();
        }); 
      });
    }
  
    function showThanksModal(message) { // ф-я которая будем заменять стандартное диалогое окно после отправки формы
      const prevModalDialog = document.querySelector(".modal__dialog");
  
      prevModalDialog.classList.add("hide");
      openModal();
  
      const thanksModal = document.createElement("div");
      thanksModal.classList.add("modal__dialog");
      thanksModal.innerHTML = `
        <div class="modal__content">
          <div class="modal__close" data-close>×</div>
          <div class="modal__title">${message}</div>
        </div>
      `;
      document.querySelector(".modal").append(thanksModal); 
      setTimeout(() => { 
        thanksModal.remove();
        prevModalDialog.classList.add("show");
        prevModalDialog.classList.remove("hide");
        closeModal();
      }, 4000);
    }
    // добавляем БД
    fetch("db.json") // возвращ-ся промис
      .then(data => data.json()) // превращ-м ответ в js объект
      .then(res => console.log(res));

    // Slider

    const slides = document.querySelectorAll(".offer__slide"),
          slider = document.querySelector(".offer__slider"),
          prev = document.querySelector(".offer__slider-prev"),
          next = document.querySelector(".offer__slider-next"),
          total = document.querySelector("#total"),
          current = document.querySelector("#current");
    let slideIndex = 1;

    //Вариант с каруселью

    const slidesWrapper = document.querySelector(".offer__slider-wrapper"),
          slidesField = document.querySelector(".offer__slider-inner"),
          width = window.getComputedStyle(slidesWrapper).width;
    let offset = 0;

    if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
    } else {
      total.textContent = slides.length;
      current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";
    
    slidesWrapper.style.overflow = "hidden";

    slides.forEach(slide => {
      slide.style.width = width;
    });

    slider.style.position = "relative";

    const indicators = document.createElement("ol"),
          dots = [];
    indicators.classList.add("carousel-indicators");
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("li");
      dot.classList.add("dot");
      dot.setAttribute("data-slide-to", i + 1);
      if (i == 0) {
        dot.style.opacity = 1;
      }
      indicators.append(dot);
      dots.push(dot);
    }

    next.addEventListener("click", () => {
      if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.slice(0, width.length - 2);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length) {
        slideIndex = 1;
      } else {
        slideIndex++;
      }

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex - 1].style.opacity = 1;
    });


    prev.addEventListener("click", () => {
      if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
      } else {
        offset -= +width.slice(0, width.length - 2);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 1) {
        slideIndex = slides.length;
      } else {
        slideIndex--;
      }

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
      dot.addEventListener("click", (e) => {
        const slideTo = e.target.getAttribute("data-slide-to");

        slideIndex = slideTo;
        offset = +width.slice(0, width.length - 2) * (slideTo - 1);

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slides.length < 10) {
          current.textContent = `0${slideIndex}`;
        } else {
          current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex - 1].style.opacity = 1;
      });
    });

    /* showSlides(slideIndex); // Обычный вариант без карусели

    if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
    } else {
      total.textContent = slides.length;
    }
    
    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach(item => item.style.display = "none");

      slides[slideIndex - 1].style.display = "block";

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }
    }

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    prev.addEventListener("click", () => {
      plusSlides(-1);
    });

    next.addEventListener("click", () => {
      plusSlides(1);
    }); */
  });

/***/ })

/******/ });
//# sourceMappingURL=script.js.map