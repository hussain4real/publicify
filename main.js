//create a variable called hambuger and set it equal to the id of the mobile-menu
let hamburger = document.getElementById("mobile-menu");
//hide the mobile menu
hamburger.style.display = "none";

let toggle = document.getElementById("click-me");

//when the user clicks on the hamburger icon, the mobile menu will appear
toggle.addEventListener("click", function () {
  if (hamburger.style.display === "none") {
    hamburger.style.display = "block";
  } else {
    hamburger.style.display = "none";
  }
});
