const loginModal = document.getElementById("login-modal");
const closeModal = document.getElementById("close-modal");

// Show the login modal when the page loads
window.addEventListener("load", () => {
    loginModal.style.display = "block";
});

// Close the login modal when the close button is clicked
closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
});