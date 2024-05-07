import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="app" style={{ backgroundColor: 'inherit', padding: '4rem 0' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom style={{ fontWeight: 700, color: '#222' }}>Welcome to E-Market Trove</Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card elevation={5} sx={{ borderRadius: 3, backgroundColor: '#fff', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
                            <CardContent>
                                <Typography variant="h4" gutterBottom style={{ color: '#222', fontWeight: 700 }}>Featured Products</Typography>
                                <Divider style={{ marginBottom: '1rem' }} />
                                <Typography variant="body1" style={{ color: '#666', marginBottom: '1.5rem' }}>Explore our featured products to discover popular items.</Typography>
                                <Button variant="contained" component={Link} to="/featured-products" sx={{ backgroundColor: '#222', color: '#fff', fontWeight: 700 }}>Go to Featured Products</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card elevation={5} sx={{ borderRadius: 3, backgroundColor: '#fff', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
                            <CardContent>
                                <Typography variant="h4" gutterBottom style={{ color: '#222', fontWeight: 700 }}>Products for Sale</Typography>
                                <Divider style={{ marginBottom: '1rem' }} />
                                <Typography variant="body1" style={{ color: '#666', marginBottom: '1.5rem' }}>Browse through our collection of products available for sale.</Typography>
                                <Button variant="contained" component={Link} to="/products-for-sale" sx={{ backgroundColor: '#222', color: '#fff', fontWeight: 700 }}>Go to Products for Sale</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card elevation={5} sx={{ borderRadius: 3, backgroundColor: '#fff', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
                            <CardContent>
                                <Typography variant="h4" gutterBottom style={{ color: '#222', fontWeight: 700 }}>Contact Us</Typography>
                                <Divider style={{ marginBottom: '1rem' }} />
                                <Typography variant="body1" style={{ color: '#666', marginBottom: '1.5rem' }}>Have questions or need assistance? Contact us here.</Typography>
                                <Button variant="contained" component={Link} to="/contact" sx={{ backgroundColor: '#222', color: '#fff', fontWeight: 700 }}>Go to Contact Us</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <footer style={{ marginTop: '4rem', backgroundColor: '#222', color: '#fff', padding: '2rem 0' }}>
                <Container maxWidth="lg">
                    <Typography variant="body1" align="center">&copy; 2024 E-Market Trove</Typography>
                </Container>
            </footer>
        </div>
    );
};

export default Home;
