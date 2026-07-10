// Book Haven Bookstore - Touchstone Task 3.1
// Adds the required alert messages to buttons and form elements.

document.addEventListener("DOMContentLoaded", function () {
  // Subscribe button on every page
  const subscribeButtons = document.querySelectorAll(".subscribe-button");

  subscribeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Thank you for subscribing.");
    });
  });

  // Add to Cart buttons on the Gallery page
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Item added to the cart.");
    });
  });

  // Clear Cart button on the Gallery page
  const clearCartButton = document.getElementById("clear-cart");

  if (clearCartButton) {
    clearCartButton.addEventListener("click", function () {
      alert("Cart cleared.");
    });
  }

  // Process Order button on the Gallery page
  const processOrderButton = document.getElementById("process-order");

  if (processOrderButton) {
    processOrderButton.addEventListener("click", function () {
      alert("Thank you for your order.");
    });
  }

  // Contact form Submit button on the About Us page
  const contactForm = document.getElementById("contact-form");
  const contactSubmitButton = document.getElementById("contact-submit");

  if (contactForm && contactSubmitButton) {
    contactSubmitButton.addEventListener("click", function (event) {
      // Allow the browser to show its built-in validation message
      // when a required field is empty.
      if (!contactForm.checkValidity()) {
        return;
      }

      event.preventDefault();
      alert("Thank you for your message.");
    });
  }
});
