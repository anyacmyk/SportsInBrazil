//I utilized  ChatGPT to integrate dynamic features in JavaScript while strictly adhering to academic integrity guidelines and ensuring a comprehensive understanding of the code
//I created this code snippet with help from ChatGPT and DECO7140 studio guides.

// Import function from components.js
import {
  submitEventForm,
  fetchEvents,
  displayEvents,
  handleGetError,
} from "./components.js";

// Function to handle successful form submission
function handleSuccess(result) {
  const messageDiv = document.getElementById("submitResponse");
  messageDiv.textContent = `Thanks! ${result.person_name}'s post was submitted successfully!`;
  messageDiv.style.color = "green";
  
  // Reset the form after successful submission
  document.getElementById("chatPostForm").reset();
  
  // Fetch and display updated events
  fetchEvents(displayEvents, handleGetError);
}

// Function to handle errors during form submission
function handleError(error) {
  const messageDiv = document.getElementById("submitResponse");
  messageDiv.textContent = `Error: ${error.message}`;
  messageDiv.style.color = "red";
  console.error("Error during submission:", error);
}

// Add event listener for form submission
document
  .getElementById("chatPostForm")
  .addEventListener("submit", function (event) {
      event.preventDefault();
      
      // Create FormData object from the form
      const formData = new FormData(event.target);
      
      // Submit the form data
      submitEventForm(formData, handleSuccess, handleError);
  });

// Fetch and display events when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchEvents(displayEvents, handleError);
});