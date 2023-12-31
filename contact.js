document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Display alert message
    alert('Your entry has been recorded.');
    
    // Optionally, reset the form after submission
    this.reset();
  });