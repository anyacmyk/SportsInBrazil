//I utilized  ChatGPT to integrate dynamic features in JavaScript while strictly adhering to academic integrity guidelines and ensuring a comprehensive understanding of the code

//Startup Code
export function showPageLoadMessage() {
  console.log("Page is loaded!");
}

window.onload = function () {
  showPageLoadMessage();
};

// Functions- General Behaviour
//Hamburger Menu
//The code snippet (Hamburger Menu) below has been sourced from https://www.youtube.com/watch?v=aNDqzlAKmZc. The code snippet appears in an adapted form
const hamMenu = document.querySelector(".ham_menu");
const offScreenMenu = document.querySelector(".off_screen_menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active"); // Toggle hamburger icon animation if needed
  offScreenMenu.classList.toggle("active"); // Toggle menu visibility
});
