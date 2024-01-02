// Get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const reviewInput = document.getElementById('review');
const ratingInput = document.getElementById('rating');

// Review submission handler
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get values
    const name = nameInput.value;
    const review = reviewInput.value;
    const rating = ratingInput.value;

    // Create review element
    const newReview = document.createElement('div');

    // Add review content
    newReview.innerHTML = `
    <h3>${name} - <span>${rating} stars</span></h3>
    <p>${review}</p>
  `;

    // Add to reviews section
    const reviews = document.querySelector('.reviews');
    reviews.appendChild(newReview);

    // Clear form
    form.reset();
});