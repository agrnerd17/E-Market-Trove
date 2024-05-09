import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardActionArea, CardContent, CardMedia, Rating, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import bookshelf from '../assets/bookshelf.jpeg';
import couch from '../assets/couch.jpeg';
import dresser from '../assets/dresser.jpeg';
import floor_cushion from '../assets/floor_cushion.jpeg';
import table from '../assets/table.jpeg';
import comingsoon from '../assets/comingsoon.png';

const Furniture = () => {
  // Sample furniture data
  const [furnitureData, setFurnitureData] = useState([
        {
          id: 1,
          name: "White Bookshelf",
          seller: "Books Co.",
          image: bookshelf,
          rating: 4.5,
          price: "$199.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 2,
          name: "Couch",
          seller: "Home Furnishings",
          image: couch,
          rating: 3.8,
          price: "$149.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 3,
          name: "Wooden Dresser",
          seller: "Modern Furniture",
          image: dresser,
          rating: 4.2,
          price: "$159.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 4,
          name: "Floor Cushion",
          seller: "Comfy Designs",
          image: floor_cushion,
          rating: 4.0,
          price: "$189.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 5,
          name: "Wooden Table",
          seller: "Vintage Finds",
          image: table,
          rating: 4.7,
          price: "$149.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 6,
          name: "Contemporary Bookshelf",
          seller: "Bookish Decor",
          image: comingsoon,
          rating: 4.2,
          price: "$199.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 7,
          name: "Antique Sideboard",
          seller: "Elegant Antiques",
          image: comingsoon,
          rating: 4.8,
          price: "$199.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 8,
          name: "Mid-Century Ottoman",
          seller: "Retro Designs",
          image: comingsoon,
          rating: 4.4,
          price: "$199.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 9,
          name: "Industrial Bar Stool",
          seller: "Urban Furniture",
          image: comingsoon,
          rating: 4.1,
          price: "$199.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 10,
          name: "Scandinavian Desk",
          seller: "Nordic Designs",
          image: comingsoon,
          rating: 4.6,
          price: "$199.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 11,
          name: "Farmhouse Bench",
          seller: "Country Living",
          image: comingsoon,
          rating: 4.3,
          price: "$199.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
        {
          id: 12,
          name: "Minimalist Bed Frame",
          seller: "Simple Living",
          image: comingsoon,
          rating: 4.5,
          price: "$199.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat vehicula magna vel iaculis.",
        },
      ]);
      

  const [selectedItem, setSelectedItem] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setUserRating(item.rating); //sets user rating functionality
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
    setFurnitureData((prevData) =>
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
                    <Typography variant="body2" color="textSecondary" component="div">
                      Price: {item.price}
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
