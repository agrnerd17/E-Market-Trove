import React, { useState } from 'react'; // React elemenets for use

// Contact function
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); // store data

  // Check form for data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Respond to submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior

    alert(`Thank you for contacting us, ${formData.name}! We will respond to your email at ${formData.email} soon.`); // display a message to the user
  };

  // Embeded styles for form elements
  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  };
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  // Display form
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={inputStyle} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} style={{ ...inputStyle, height: '200px' }} />
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
}

export default ContactForm; // export to react
