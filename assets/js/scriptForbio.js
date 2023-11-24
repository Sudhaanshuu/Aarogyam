const loginModal = document.getElementById("login-modal");
const bioAuthModal = document.getElementById("bio-auth-modal");
const imageModal = document.getElementById("image-modal");
const loginForm = document.getElementById("login-form");


// Show the login modal when the page loads
window.addEventListener("load", () => {
    loginModal.style.display = "block";
});

// Show the biometric authentication modal
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // You can add your biometric authentication logic here
    // If authentication is successful, show the image modal
    bioAuthModal.style.display = "block";
});

// Close modals when the close button is clicked
const closeModalButtons = document.querySelectorAll(".close");
closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        loginModal.style.display = "none";
        bioAuthModal.style.display = "none";
        imageModal.style.display = "none";
    });
});