const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Input values
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();

      // Error spans
      const firstNameError = document.getElementById("firstNameError");
      const lastNameError = document.getElementById("lastNameError");
      const phoneError = document.getElementById("phoneError");
      const emailError = document.getElementById("emailError");

      // Clear previous errors
      firstNameError.textContent = "";
      lastNameError.textContent = "";
      phoneError.textContent = "";
      emailError.textContent = "";

      let isValid = true;

      // First name validation
      if (firstName.length < 4) {
        firstNameError.textContent = "First name must be at least 4 characters.";
        isValid = false;
      }

      // Last name validation
      if (lastName.length < 4) {
        lastNameError.textContent = "Last name must be at least 4 characters.";
        isValid = false;
      }

      // Phone number validation
      if (!/^\d{11}$/.test(phone)) {
        phoneError.textContent = "Phone number must be exactly 11 digits.";
        isValid = false;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
      }

      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
      }
    });