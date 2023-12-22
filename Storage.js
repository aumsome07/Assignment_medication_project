
// registration.js

function submitRegistration(event) {
    event.preventDefault();
  
    // Get user input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Store user input in local storage
    const userData = {
      fullName: fullName,
      email: email,
      password: password
    };
  
    localStorage.setItem('userData', JSON.stringify(userData));
  
    // Add registration logic here (e.g., redirect to a confirmation page)
    alert("Registration successful. Redirecting to login page.");
    window.location.href = "loginPage.html"; // Change the URL to your login page
  }
  