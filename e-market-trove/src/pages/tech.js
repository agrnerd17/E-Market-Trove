import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardActionArea, CardContent, CardMedia, Rating, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import game_controller from '../assets/game_controller.png';
import headphones from '../assets/headphones.jpeg';
import keyboard from '../assets/keyboard.jpeg';
import microphone from '../assets/microphone.jpeg';
import mouse from '../assets/mouse.jpeg';
import comingsoon from '../assets/comingsoon.png';

const Technology = () => {
  // Sample technology data
  const [technologyData, setTechnologyData] = useState([
    {
      id: 1,
      name: "Game Controller",
      seller: "Mario Bro's",
      image: game_controller,
      rating: 4.5,
      price: "$70.99",
      description: "Enhance your gaming experience with this ergonomic game controller from Mario Bro's. Featuring responsive controls and a comfortable grip, this controller is perfect for long gaming sessions.",
    },
    {
      id: 2,
      name: "Headphones",
      seller: "Sony",
      image: headphones,
      rating: 3.8,
      price: "$149.99",
      description: "Immerse yourself in music with these high-quality headphones from Sony. With their noise-canceling technology and superior sound quality, these headphones deliver an exceptional listening experience.",
    },
    {
      id: 3,
      name: "Desktop Keyboard",
      seller: "Dell",
      image: keyboard,
      rating: 4.2,
      price: "$50.99",
      description: "Boost your productivity with this reliable desktop keyboard from Dell. With its durable construction and responsive keys, this keyboard is ideal for work or gaming.",
    },
    {
      id: 4,
      name: "Microphone",
      seller: "Yeti",
      image: microphone,
      rating: 4.0,
      price: "$189.99",
      description: "Capture crystal-clear audio with this professional-grade microphone from Yeti. Whether for podcasts or recordings, this microphone delivers studio-quality sound.",
    },
    {
      id: 5,
      name: "Mouse",
      seller: "Seller Name",
      image: mouse,
      rating: 4.7,
      price: "$25.99",
      description: "Navigate with precision using this ergonomic mouse from Seller Name. With its smooth tracking and comfortable design, this mouse enhances your computing experience.",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      seller: "Seller Name",
      image: comingsoon,
      rating: 4.2,
      price: "$199.99",
      description: "Stream your favorite tunes with this portable Bluetooth speaker from Seller Name. Featuring powerful sound and long battery life, this speaker is perfect for parties or outdoor adventures.",
    },
    {
      id: 7,
      name: "Roomba",
      seller: "Seller Name",
      image: comingsoon,
      rating: 4.8,
      price: "$199.99",
      description: "Simplify your cleaning routine with this robotic vacuum cleaner from Seller Name. With its smart navigation and powerful suction, this Roomba keeps your floors spotless with minimal effort.",
    },
    {
      id: 8,
      name: "JBL Speaker",
      seller: "Seller Name",
      image: comingsoon,
      rating: 4.4,
      price: "$199.99",
      description: "Elevate your audio experience with this premium JBL speaker from Seller Name. With its immersive sound and sleek design, this speaker enhances any listening environment.",
    },
    {
      id: 9,
      name: "Nintendo Switch",
      seller: "Seller Name",
      image: comingsoon,
      rating: 4.1,
      price: "$60.99",
      description: "Embark on gaming adventures with the Nintendo Switch from Seller Name. With its versatile design and library of games, the Nintendo Switch offers endless entertainment for gamers of all ages.",
    },
    {
      id: 10,
      name: "PS4",
      seller: "Seller Name",
      image: comingsoon,
      rating: 4.6,
      price: "$78.99",
      description: "Experience the thrill of gaming with the PS4 from Seller Name. With its powerful performance and exclusive titles, the PS4 delivers immersive gameplay for enthusiasts and casual gamers alike.",
    },
    {
      id: 11,
      name: "Xbox One",
      seller: "Seller Name",
      image: comingsoon,
      rating: 4.3,
      price: "$199.99",
      description: "Enter the world of gaming with the Xbox One from Seller Name. With its cutting-edge technology and expansive game library, the Xbox One offers unparalleled entertainment for gamers.",
    },
    {
      id: 12,
      name: "TV",
      seller: "Seller Name",
      image: comingsoon,
      rating: 4.5,
      price: "$250.99",
      description: "Immerse yourself in stunning visuals with this high-definition TV from Seller Name. With its crisp display and immersive sound, this TV brings your favorite movies and shows to life.",
    },
    // Add more items if needed
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
