import React, { useState } from 'react';

// Contact from 
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Process form data here
    console.log('Form Submission:', formData);

    // Optionally, send the data to a server or display a message to the user
    alert('Thank you for contacting us, ' + formData.name + '! We will respond to your email at ' + formData.email + ' soon.');
  };

  // Fisplay form
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm; // Let react access the component
