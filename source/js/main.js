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

function openTask(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.querySelectorAll(".tasks__item");

  // tabcontent = document.getElementsByClassName("tasks__item");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tasks__toggle");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tasks__toggle--current", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tasks__toggle--current";
}

function openTask1(evt, cityName) {
  if (event.keyCode == 13) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".tasks__item");

    // tabcontent = document.getElementsByClassName("tasks__item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tasks__toggle");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tasks__toggle--current", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " tasks__toggle--current";
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




