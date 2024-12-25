//I utilized  ChatGPT to integrate dynamic features in JavaScript while strictly adhering to academic integrity guidelines and ensuring a comprehensive understanding of the code
//I created this code snippet with help from ChatGPT and DECO7140 studio guides.

// Constants for API configuration
const studentNumber = "s4914371";
const uqcloudZoneId = "cd83a742";

// Create headers for API requests
const headers = new Headers();
headers.append("student_number", studentNumber);
headers.append("uqcloud_zone_id", uqcloudZoneId);

// Function to submit a new event to the API
function submitEventForm(formData, handleSuccess, handleError) {
  fetch(
    "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericchat/",
    {
      method: "POST",
      headers: headers,
      body: formData,
    }
  )
    .then((response) => {
      if (!response.ok) {
        return response.json().then((err) => {
          console.error("Server error response:", err);
          throw new Error(err.detail || "Something went wrong");
        });
      }
      return response.json();
    })
    .then((result) => {
      console.log("Event created:", result);
      handleSuccess(result);
    })
    .catch((error) => {
      console.error("Error:", error.message);
      handleError(error);
    });
}

// Function to fetch events from the Generic Chat API
function fetchEvents(displayEvents, handleGetError) {
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch(
    "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericchat/",
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched events data:", data);
      displayEvents(data);
    })
    .catch((error) => {
      handleGetError(error);
    });
}

// Function to handle errors during fetching events
function handleGetError(error) {
  console.error("Error fetching events:", error);
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = "Failed to fetch events. Please try again later.";
  errorMessage.style.color = "red";
}

// Function to display fetched events on the webpage
function displayEvents(data) {
  const eventsContainer = document.getElementById("eventsContainer");
  eventsContainer.innerHTML = "";

  if (Array.isArray(data) && data.length > 0) {
    data.forEach((event) => {
      const eventElement = document.createElement("div");
      eventElement.classList.add("event");
      eventElement.innerHTML = `
                <h3>Social Media: ${event.chat_post_content}</h3>
                <p>First Name: ${event.person_name}</p>
                <p>Last Name: ${event.chat_post_title}</p>
                <p class="chat-date-time">Posted on: ${event.chat_date_time}</p>
            `;
      eventsContainer.appendChild(eventElement);
    });
  } else {
    eventsContainer.innerHTML = "<p>No events found.</p>";
  }
}

// Export functions and constants to make it a module JS file
export {
  submitEventForm,
  fetchEvents,
  displayEvents,
  handleGetError,
  studentNumber,
  uqcloudZoneId,
  headers,
};
