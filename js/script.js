//I utilized  ChatGPT to integrate dynamic features in JavaScript while strictly adhering to academic integrity guidelines and ensuring a comprehensive understanding of the code

//Image Carousel at sports.html
//The code snippet (Responsive Image Carousel) below has been sourced from https://codepen.io/noirsociety/pen/ZEwLGXB. The code snippet appears in an adapted form
const prevVar = document.querySelector(".prev");
const nextVar = document.querySelector(".next");

// Code for creating Image Carousel
const slideArray = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showSlide(index) {
  if (slideArray) {
    for (var i = 0; i < slideArray.length; i++) {
      slideArray[i].style.display = i === index ? "block" : "none";
      dots[i].classList.toggle("active", i === index);
    }
  }
}
showSlide(currentIndex);

// Add event listeners to dots for navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});



// Image Slider at pubs.html
// The code snippet (Image Tab Gallery) below has been sourced from https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp. The code snippet appears in an adapted form.
// Function to change the main image when a thumbnail is clicked
function changeImage(element) {
  const mainImage = document.getElementById("mainImage");
  if (mainImage) {
    mainImage.src = element.src;
    mainImage.alt = element.alt;
  }
}

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");

  // Only add event listeners if thumbnails exist on the page
  if (thumbnails.length > 0) {
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        changeImage(thumbnail);
      });
    });
  }
});



//Form submission in help.html
// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Get the form element
  const form = event.target;

  // Create a thank you message
  const thankYouMessage = document.createElement("div");
  thankYouMessage.textContent = "Thank you for your submission!";
  thankYouMessage.className = "thank-you-message";

  // Replace the form with the thank you message
  form.parentNode.replaceChild(thankYouMessage, form);

}

// Add event listener to the form if it exists
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
});



//Discount Code button in pubs.html/player.html
//I created this code snippet with help from ChatGPT.
document.addEventListener("DOMContentLoaded", function () {
  const discountBtn = document.getElementById("discount-btn");
  const popupMembership = document.getElementById("popup-membership");
  const popupOverlay = document.getElementById("popup-overlay");

  // Check if discount button exists, and only then add the click event listener
  if (discountBtn) {
    discountBtn.addEventListener("click", () => {
      popupMembership.style.display = "block";
      popupOverlay.style.display = "block";
    });
  }

  // Close popup and overlay on click of close button or overlay
  popupOverlay?.addEventListener("click", closePopup);
  document.getElementById("close-popup")?.addEventListener("click", closePopup);

  function closePopup() {
    popupMembership.style.display = "none";
    popupOverlay.style.display = "none";
  }
});
