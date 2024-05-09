import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardActionArea, CardContent, CardMedia, Rating, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import shirt from '../assets/shirt.jpeg';
import sneakers from '../assets/sneakers.jpeg';
import sweatpants from '../assets/sweatpants.jpeg';
import sweatshirt from '../assets/sweatshirt.png';


const Clothing = () => {
  // Sample furniture data
  const [clothingData, setClothingData] = useState([
    {
    id: 1,
          name: "Polyester Shirt",
          seller: "Shirts Co.",
          image: shirt,
          rating: 4.5,
          price: "$18.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 2,
          name: "Trove Sneakers",
          seller: "Nike",
          image: sneakers,
          rating: 3.8,
          price: "$80.00",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 3,
          name: "Sweatpants",
          seller: "Comfy Clothing Co.",
          image: sweatpants,
          rating: 4.2,
          price: "$30.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 4,
          name: "Sweatshirt",
          seller: "Sweaters & Stuff",
          image: sweatshirt,
          rating: 4.0,
          price: "$30.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 5,
          name: "Pants",
          seller: "Thrift Finds",
          image: "https://via.placeholder.com/300",
          rating: 4.7,
          price: "$20.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 6,
          name: "Socks",
          seller: "Box Lunch",
          image: "https://via.placeholder.com/300",
          rating: 4.2,
          price: "$8.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 7,
          name: "Sunglasses",
          seller: "Shadez",
          image: "https://via.placeholder.com/300",
          rating: 4.8,
          price: "$10.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 8,
          name: "Purse",
          seller: "Coach",
          image: "https://via.placeholder.com/300",
          rating: 4.4,
          price: "$100.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 9,
          name: "Distressed Shirt",
          seller: "Urban Outfitters",
          image: "https://via.placeholder.com/300",
          rating: 4.1,
          price: "$60.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 10,
          name: "Mesh Hoodie",
          seller: "Nike",
          image: "https://via.placeholder.com/300",
          rating: 4.6,
          price: "$40.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 11,
          name: "Knit Sweater",
          seller: "Country Crochet",
          image: "https://via.placeholder.com/300",
          rating: 4.3,
          price: "$30.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 12,
          name: "Graphic Tee",
          seller: "Uniqlo",
          image: "https://via.placeholder.com/300",
          rating: 4.5,
          price: "$20.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
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
