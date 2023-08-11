
// script.js


// Function to display a popup message when the "Contact Us" button is clicked
function showContactPopup() {
  alert("Please fill out the contact form or reach us via email or phone.");
}

// Attach the function to the "Contact Us" button
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", showContactPopup);
