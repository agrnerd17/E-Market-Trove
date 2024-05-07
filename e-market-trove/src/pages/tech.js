import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardActionArea, CardContent, CardMedia, Rating, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import game_controller from '../assets/game_controller.png';
import headphones from '../assets/headphones.jpeg';
import keyboard from '../assets/keyboard.jpeg';
import microphone from '../assets/microphone.jpeg';
import mouse from '../assets/mouse.jpeg';

const Technology = () => {
  // Sample furniture data
  const [technologyData, setTechnologyData] = useState([
    {
        id: 1,
        name: "Game Controller",
        seller: "Mario Bro's",
        image: game_controller,
        rating: 4.5,
        price: "$70.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 2,
        name: "Headphones",
        seller: "Sony",
        image: headphones,
        rating: 3.8,
        price: "$149.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 3,
        name: "Desktop Keyboard",
        seller: "Dell",
        image: keyboard,
        rating: 4.2,
        price: "$50.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 4,
        name: "Microphone",
        seller: "Yeti",
        image: microphone,
        rating: 4.0,
        price: "$189.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 5,
        name: "Mouse",
        seller: "Seller Name",
        image: mouse,
        rating: 4.7,
        price: "$25.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 6,
        name: "Bluetooth Speaker",
        seller: "Seller Name",
        image: "https://via.placeholder.com/300",
        rating: 4.2,
        price: "$199.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 7,
        name: "Roomba",
        seller: "Seller Name",
        image: "https://via.placeholder.com/300",
        rating: 4.8,
        price: "$199.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 8,
        name: "JBL Speaker",
        seller: "Seller Name",
        image: "https://via.placeholder.com/300",
        rating: 4.4,
        price: "$199.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 9,
        name: "Nintendo Switch",
        seller: "Seller Name",
        image: "https://via.placeholder.com/300",
        rating: 4.1,
        price: "$60.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 10,
        name: "PS4",
        seller: "Seller Name",
        image: "https://via.placeholder.com/300",
        rating: 4.6,
        price: "$78.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 11,
        name: "Xbox One",
        seller: "Seller Name",
        image: "https://via.placeholder.com/300",
        rating: 4.3,
        price: "$199.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
      {
        id: 12,
        name: "TV",
        seller: "Seller Name",
        image: "https://via.placeholder.com/300",
        rating: 4.5,
        price: "$250.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
      },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setUserRating(item.rating); // Set initial user rating to the item's current rating
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
    // Update the technology data with the new user rating
    setTechnologyData((prevData) =>
      prevData.map((item) =>
        item.id === selectedItem.id ? { ...item, rating: userRating } : item
      )
    );
    handleCloseDialog();
  };

  const handleAddToCart = (item) => {
    // You can implement your logic to add the item to the cart here
    alert(`Added "${item.name}" to the cart!`);
  };

  return (
    <div className="tech">
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Technology
        </Typography>
        <Grid container spacing={3}>
          {technologyData.map((item) => (
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
                      value={item.rating} // Display the latest rating from technology data
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

export default Technology;
