if (window.innerWidth < 767) {
  // Показываем кнопку Бургер
  var btnOn = document.querySelector(".nav-toggle");
    btnOn.classList.remove("nav-toggle--off");
    btnOn.classList.add("nav-toggle--on");

  // Cкрываем меню на мобильном

  var siteMenu = document.querySelector(".site-list");
    siteMenu.classList.remove("site-list--on");
    siteMenu.classList.add("site-list--off");

  // Попап-меню на мобильных версиях

  var menuOn = document.querySelector(".site-list");
  var links = document.querySelectorAll(".site-list__item");

  btnOn.addEventListener('click', function(evt) {
    evt.preventDefault();
    menuOn.classList.toggle("site-list--js");
    for (i = 0; i < links.length; i++){
    links[i].classList.toggle("site-list__item--js");
  }
    btnOn.classList.toggle("nav-toggle--close");
  });
}



if (window.innerWidth < 767) {
    if (document.querySelector(".events__date")){
      var eventDateCurrent = document.querySelector(".events__date");
      eventDateCurrent.classList.add("events__date--current");

      var eventsPhotoOff = document.querySelectorAll(".events__photo");
      var eventsOff = document.querySelectorAll(".events__about");
      for (i = 1; i < eventsOff.length; i++){
        eventsPhotoOff[i].classList.add("events__photo--off");
        eventsOff[i].classList.add("events__about--off");
      }

      var eventDatesCurrent = document.querySelectorAll(".events__date");
      var eventCurrent = document.querySelectorAll(".events__about");
      var eventPhotoCurrent = document.querySelectorAll(".events__photo");

      for (i = 0; i < eventDatesCurrent.length; i++){
        eventDatesCurrent[i].addEventListener('click', function(evt) {
        evt.preventDefault();
         if (this.classList.contains("events__date--current") == false) {
          for (j = 0; j < eventDateCurrent.length; j++){
            eventCurrent[j].classList.add("events__about--off");
            eventPhotoCurrent[j].classList.add("events__photo--off");
            eventDatesCurrent[j].classList.remove("events__date--current");
          }
            this.classList.add("events__date--current");

            var aboutOn = this.nextElementSibling;
            aboutOn.classList.remove("events__about--off");

            var photoOn = aboutOn.nextElementSibling;
            photoOn.classList.remove("events__photo--off");
          } else {
            this.classList.toggle("events__date--current");

            aboutOn = this.nextElementSibling;
            aboutOn.classList.toggle("events__about--off");

            photoOn = aboutOn.nextElementSibling;
            photoOn.classList.toggle("events__photo--off");
          }
        });
      }
    }
}



// Кнопка "Наверх"

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Swiper "Основные задачи" на главной
if (document.querySelector(".tasks__swiper-container")) {
 var taskSwiper = new Swiper ('.tasks__swiper-container', {

    // Optional parameters
  slideClass: 'tasks__swiper-slide',
  slideActiveClass: 'tasks__swiper-slide-active',
  slideDuplicateActiveClass: 'tasks__swiper-slide-duplicate-active',
  slideVisibleClass: 'tasks__swiper-slide-visible',
  slideDuplicateClass: 'tasks__swiper-slide-duplicate',
  slideNextClass: 'tasks__swiper-slide-next',
  slideDuplicateNextClass: 'tasks__swiper-slide-duplicate-next',
  slidePrevClass: 'tasks__swiper-slide-prev',
  slideDuplicatePrevClass: 'tasks__swiper-slide-duplicate-prev',
  keyboard: {
    enabled: true,
  },
  containerModifierClass: '.tasks__swiper-container-',
  wrapperClass: 'tasks__swiper-wrapper',

  slidesPerView: 'auto',
  centeredSlides: false, //true,
  spaceBetween: 0,
  speed: 400,

// direction: 'vertical',
  direction: 'horizontal',
// loop: true,

    // If we need pagination
pagination: {
  // el: '.swiper-pagination',
  el: '.tasks__pagin',
  bulletClass: 'tasks__toggle',
  bulletActiveClass: 'tasks__toggle--current',
  clickableClass: 'tasks__toggle--clickable',
  clickable: true,

// bulletElement: 'li';
    renderBullet: function (index, className) {
      return '<div class="' + 'tasks__toggle' + '"><span>' + (index + 1) + '.</span></div>';
    },

  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1170: {
      slidesPerView: 3,
    },
  },

// Navigation arrows
// navigation: {
//   nextEl: '.tasks__swiper-button-next',
//   prevEl: '.tasks__swiper-button-prev',
// },

// And if we need scrollbar
// scrollbar: {
//   el: '.swiper-scrollbar',
// },
  })


var taskSwiper = document.querySelector('.tasks__swiper-container').swiper
// console.log(taskSwiper.slides[0]);
// Now you can use all slider methods like
// taskSwiper.slideNext();
}


// Активируем слайдер Календарь на странице События
if(document.querySelector(".calendar__list")) {
var calendarMenu = document.querySelector(".calendar__list");
  calendarMenu.classList.add("calendar__list--js");
var calendarNav = document.querySelectorAll(".calendar__nav");
  for (i = 0; i < calendarNav.length; i++){
    calendarNav[i].classList.add("calendar__nav--js");
  }

  // Swiper "Календарь" на странице событий
  if (document.querySelector(".calendar__box")) {
   var calendarSwiper = new Swiper('.calendar__box', {

      // Optional parameters
    slideClass: 'calendar__item',
    slideActiveClass: 'calendar__item-active',
    slideDuplicateActiveClass: 'calendar__item-duplicate-active',
    slideVisibleClass: 'calendar__item-visible',
    slideDuplicateClass: 'calendar__item-duplicate',
    slideNextClass: 'calendar__item-next',
    slideDuplicateNextClass: 'calendar__item-duplicate-next',
    slidePrevClass: 'calendar__item-prev',
    slideDuplicatePrevClass: 'calendar__item-duplicate-prev',
    keyboard: {
      enabled: true,
    },
    containerModifierClass: '.calendar__box-',
    wrapperClass: 'calendar__list',

    slidesPerView: 'auto',
    centeredSlides: false,
    freeMode: true,
    spaceBetween: 0,
    speed: 400,

  // direction: 'vertical',
    direction: 'horizontal',

  // Navigation arrows
    navigation: {
      nextEl: '.calendar__nav--next',
      prevEl: '.calendar__nav--prev',
      disabledClass: '.calendar__nav--disabled',
      hiddenClass: '.calendar__nav--disabled',
    },

    })
  }
}
