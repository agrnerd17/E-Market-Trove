import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardActionArea, CardContent, CardMedia, Rating, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import shirt from '../assets/shirt.jpeg';
import sneakers from '../assets/sneakers.jpeg';
import sweatpants from '../assets/sweatpants.jpeg';
import sweatshirt from '../assets/sweatshirt.png';
import comingsoon from '../assets/comingsoon.png';

const Clothing = () => {
  // Sample clothing data
  const [clothingData, setClothingData] = useState([
    {
      id: 1,
      name: "Polyester Shirt",
      seller: "Shirts Co.",
      image: shirt,
      rating: 4.5,
      price: "$18.99",
      description: "A comfortable polyester shirt perfect for casual wear. Made with high-quality materials, this shirt offers both style and comfort.",
    },
    {
      id: 2,
      name: "Trove Sneakers",
      seller: "Nike",
      image: sneakers,
      rating: 3.8,
      price: "$80.00",
      description: "Stylish sneakers from Nike's Trove collection. Designed for both performance and fashion, these sneakers are a must-have for any wardrobe.",
    },
    {
      id: 3,
      name: "Sweatpants",
      seller: "Comfy Clothing Co.",
      image: sweatpants,
      rating: 4.2,
      price: "$30.99",
      description: "Relax in these cozy sweatpants from Comfy Clothing Co. Made with soft fabric and an elastic waistband, these sweatpants are perfect for lounging or running errands.",
    },
    {
      id: 4,
      name: "Sweatshirt",
      seller: "Sweaters & Stuff",
      image: sweatshirt,
      rating: 4.0,
      price: "$30.99",
      description: "Stay warm and stylish with this sweatshirt from Sweaters & Stuff. Featuring a classic design and comfortable fit, this sweatshirt is ideal for cooler days.",
    },
    {
      id: 5,
      name: "Pants",
      seller: "Thrift Finds",
      image: comingsoon,
      rating: 4.7,
      price: "$20.99",
      description: "Classic pants perfect for any occasion, brought to you by Thrift Finds. Made with durable fabric and a versatile design, these pants are a wardrobe essential.",
    },
    {
      id: 6,
      name: "Socks",
      seller: "Box Lunch",
      image: comingsoon,
      rating: 4.2,
      price: "$8.99",
      description: "Comfortable and stylish socks from Box Lunch. Made with breathable material and a snug fit, these socks keep your feet cozy all day long.",
    },
    {
      id: 7,
      name: "Sunglasses",
      seller: "Shadez",
      image: comingsoon,
      rating: 4.8,
      price: "$10.99",
      description: "Protect your eyes with these fashionable sunglasses from Shadez. Featuring UV protection and a trendy design, these sunglasses are perfect for sunny days.",
    },
    {
      id: 8,
      name: "Purse",
      seller: "Coach",
      image: comingsoon,
      rating: 4.4,
      price: "$100.99",
      description: "Carry your essentials in style with this purse from Coach. Made with premium materials and a spacious interior, this purse is both chic and practical.",
    },
    {
      id: 9,
      name: "Distressed Shirt",
      seller: "Urban Outfitters",
      image: comingsoon,
      rating: 4.1,
      price: "$60.99",
      description: "Make a statement with this distressed shirt from Urban Outfitters. Featuring a worn-in look and edgy design, this shirt adds character to any outfit.",
    },
    {
      id: 10,
      name: "Mesh Hoodie",
      seller: "Nike",
      image: comingsoon,
      rating: 4.6,
      price: "$40.99",
      description: "Stay cool and stylish with this mesh hoodie from Nike. Made with breathable fabric and a modern design, this hoodie is perfect for workouts or casual wear.",
    },
    {
      id: 11,
      name: "Knit Sweater",
      seller: "Country Crochet",
      image: comingsoon,
      rating: 4.3,
      price: "$30.99",
      description: "Cozy up in this knit sweater from Country Crochet. Featuring a classic knit pattern and soft fabric, this sweater is a cold-weather essential.",
    },
    {
      id: 12,
      name: "Graphic Tee",
      seller: "Uniqlo",
      image: comingsoon,
      rating: 4.5,
      price: "$20.99",
      description: "Express yourself with this graphic tee from Uniqlo. Featuring unique graphics and comfortable fabric, this tee adds personality to any outfit.",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setUserRating(item.rating); 
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
    setDialogOpen(false);
    setUserRating(0);
  };

  const handleRatingChange = (newValue) => {
    setUserRating(newValue);
  };

  const handleSubmitRating = () => {
    setClothingData((prevData) =>
      prevData.map((item) =>
        item.id === selectedItem.id ? { ...item, rating: userRating } : item
      )
    );
    handleCloseDialog();
  };

  const handleAddToCart = (item) => {
    alert(`Added "${item.name}" to the cart!`);
  };

  return (
    <div className="clothing">
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Clothing
        </Typography>
        <Grid container spacing={3}>
          {clothingData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardActionArea onClick={() => handleOpenDialog(item)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                      Seller: {item.seller}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                      Price: {item.price}
                    </Typography>
                    <Rating
                      value={item.rating} // Display the latest rating from clothing data
                      readOnly
                      precision={0.1}
                    />
                  </CardContent>
                </CardActionArea>
                <IconButton onClick={() => handleAddToCart(item)} aria-label="Add to cart">
                  <ShoppingCartIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Item Description Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        {selectedItem && (
          <>
            <DialogTitle>{selectedItem.name}</DialogTitle>
            <DialogContent>
              <Typography>{selectedItem.description}</Typography>
              <Rating
                value={userRating} // Display the user's rating
                onChange={(event, newValue) => handleRatingChange(newValue)}
                precision={0.5}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmitRating} color="primary">
                Submit
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default Clothing;
