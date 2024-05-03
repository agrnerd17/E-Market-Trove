document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log or process the form data here
    console.log('Form Submission:', { name, email, message });

    // Optionally, send the data to a server or display a message to the user
    alert('Thank you for contacting us, ' + name + '! We will respond to your email at ' + email + ' soon.');
});
