// login.js

function submitLogin(event) {
    event.preventDefault();
  
    // Get user input values
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    // Retrieve stored user data from local storage
    const storedUserData = localStorage.getItem('userData');
  
    if (storedUserData) {
      // Parse stored user data from JSON
      const userData = JSON.parse(storedUserData);
  
      // Check if the entered email and password match the stored data
      if (loginEmail === userData.email && loginPassword === userData.password) {
        // Add login logic here (e.g., redirect to the main app page)
        alert("Login successful. Redirecting to the main app page.");
        window.location.href = "mainapp.html"; // Change the URL to your main app page
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      alert("No user data found. Please register first.");
    }
  }
  