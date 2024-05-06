import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardActionArea, CardContent, CardMedia, Rating, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Furniture = () => {
  // Sample furniture data
  const [furnitureData, setFurnitureData] = useState([
    {
      id: 1,
      name: "Modern Armchair",
      seller: "Furniture Co.",
      image: "https://via.placeholder.com/300",
      rating: 4.5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
    },
    {
      id: 2,
      name: "Wooden Coffee Table",
      seller: "Home Furnishings",
      image: "https://via.placeholder.com/300",
      rating: 3.8,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
    },
    {
      id: 3,
      name: "Leather Sofa",
      seller: "Comfort Furniture",
      image: "https://via.placeholder.com/300",
      rating: 4.2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
    },
    // Add more furniture items here...
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
    // Update the furniture data with the new user rating
    setFurnitureData((prevData) =>
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
    <div className="furniture">
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Furniture
        </Typography>
        <Grid container spacing={3}>
          {furnitureData.map((item) => (
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
                    <Rating
                      value={item.rating} // Display the latest rating from furniture data
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

export default Furniture;
