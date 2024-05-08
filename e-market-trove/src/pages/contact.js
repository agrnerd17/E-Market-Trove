import React, { useState } from 'react';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = () => {
    setMessageSent(true); // after sending the message, set messageSent to true
  };

  return (
    <div className="contact">
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              Feel free to contact us with any questions or inquiries. We're here to help!
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <EmailIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">contact@example.com</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <PhoneIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">+1234567890</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <LocationOnIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">123 Main Street, City, Country</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              Send Us a Message
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={handleSendMessage} // call handleSendMessage when the button is clicked
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
            {messageSent && (
              <Typography variant="body1" style={{ marginTop: '1rem', color: 'green' }}>
                Message sent successfully!
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
