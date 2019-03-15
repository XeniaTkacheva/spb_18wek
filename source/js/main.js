// var tasksToggle = document.querySelectorAll(".tasks__toggle");
// var tasksItem = document.querySelectorAll(".tasks__item");

// console.log(tasksToggle, tasksItem);

// for (var i = 0; i < tasksItem.length; i++){
//     tasksToggle[i].addEventListener("click", function (evt, tasksToggle, tasksItem) {
//       tasksToggle[i].classList.add("tasks__toggle--current");
//       tasksItem[i].classList.add("tasks__item--current");
//     });
//   };


// classList.toggle("newClassName")




function openCity(evt, cityName) {
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
