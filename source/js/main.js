var btnOn = document.querySelector(".nav-toggle");
  btnOn.classList.remove("nav-toggle--off");
  btnOn.classList.add("nav-toggle--on");

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


// Список задач на главной

// function openTask(evt, cityName) {
//   // Declare all variables
//   var i, tabcontent, tablinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.querySelectorAll(".tasks__item");

//   // tabcontent = document.getElementsByClassName("tasks__item");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tasks__toggle");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" tasks__toggle--current", "");
//   }

//   // Show the current tab, and add an "active" class to the link that opened the tab
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " tasks__toggle--current";
// }

// function openTask1(evt, cityName) {
//   if (event.keyCode == 13) {
//     // Declare all variables
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.querySelectorAll(".tasks__item");

//     // tabcontent = document.getElementsByClassName("tasks__item");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tasks__toggle");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" tasks__toggle--current", "");
//     }

//     // Show the current tab, and add an "active" class to the link that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " tasks__toggle--current";
//   }
// }

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



// Swiper
 var taskSwiper = new Swiper ('.swiper-container', {
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
    // wrapperClass: 'task__swiper-wrapper',
    // containerModifierClass:
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


              // bulletElement: 'li';
              renderBullet: function (index, className) {
    return '<div class="' + 'tasks__toggle' + '"><span>' + (index + 1) + '.</span></div>';
  },
  clickable: true,
    },
      breakpoints: {
        1170: {
          slidesPerView: 3,
          // spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          // spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          // spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          // spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          // spaceBetween: 10,
        }
      },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })


var taskSwiper = document.querySelector('.swiper-container').swiper

// Now you can use all slider methods like
taskSwiper.slideNext();

