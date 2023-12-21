document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  const form = document.getElementById("signupForm");
  const emailInput = document.getElementById("emailInput");
  const errorEmail = document.querySelector(".error-email");

  console.log("Form found:", form);
  console.log("Email input found:", emailInput);
  console.log("Error message element found:", errorEmail);

  form.addEventListener("submit", function (event) {
    console.log("Submit event triggered");
    event.preventDefault(); // Prevent the form from submitting

    const email = emailInput.value;
    console.log("Email value: ", email);

    // Simple regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      console.log("Email is invalid - showing error");
      errorEmail.style.display = "block"; // Show the error message
      emailInput.classList.add("input-error"); // Add error class to input for styling
    } else {
      console.log("Email is valid - hiding error");
      errorEmail.style.display = "none"; // Hide the error message
      emailInput.classList.remove("input-error"); // Remove error class from input
      // Uncomment the below line to allow form submission after validation
      // form.submit();
    }
  });
});
