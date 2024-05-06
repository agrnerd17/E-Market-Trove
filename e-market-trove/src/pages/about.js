import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

export default function About() {
    return (
        <div className='about'>

        <Container maxWidth="md" sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h2" gutterBottom>
                About Us
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="body1" paragraph>
                        E-Market Trove is your go-to destination for a wide array of top-quality products. From everyday essentials to trendy gadgets and stylish decor, we've curated a collection that caters to your diverse needs and preferences.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Our Mission
                    </Typography>
                    <Typography variant="body1" paragraph>
                        At E-Market Trove, we're passionate about delivering an exceptional shopping experience to every customer. With a focus on convenience, quality, and affordability, we strive to exceed your expectations with every purchase.

                        Our platform is designed to make your shopping journey seamless and enjoyable. Explore our user-friendly interface, browse through our carefully selected products, and find exactly what you're looking for with ease.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Why Choose Us
                    </Typography>
                    <Typography variant="body1" paragraph>
                        One of the key features that sets us apart is our trustworthiness rating system. We believe in transparency and accountability, which is why we empower our customers to leave ratings and reviews based on their shopping experiences.

                        These ratings help build trust within our community and ensure that you can shop with confidence. Rest assured that every product on E-Market Trove is backed by genuine feedback from fellow shoppers.

                        One of the best ways to fully utilize our trustworthiness rating system is by creating an account. By signing up, you'll be able to leave ratings and reviews, contributing to our vibrant community of trustworthy shoppers.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        We hope to see you soon!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Don't miss out on the full E-Market Trove experience. Sign up today and enjoy all the perks of being part of our growing community of satisfied shoppers.

                        Thank you for choosing E-Market Trove. We're excited to be part of your shopping experience and look forward to serving you for years to come.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Sincerely,<br />
                        The E-Market Trove Team<br />
                        Based in Fullerton, CA
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
}
