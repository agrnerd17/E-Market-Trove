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
      description: "Organize your books in style with this elegant white bookshelf from Books Co. Featuring ample storage space and a modern design, this bookshelf is a perfect addition to any home or office.",
    },
    {
      id: 2,
      name: "Couch",
      seller: "Home Furnishings",
      image: couch,
      rating: 3.8,
      price: "$149.99",
      description: "Relax and unwind on this comfortable couch from Home Furnishings. With its plush cushions and durable construction, this couch is ideal for lounging or entertaining guests.",
    },
    {
      id: 3,
      name: "Wooden Dresser",
      seller: "Modern Furniture",
      image: dresser,
      rating: 4.2,
      price: "$159.99",
      description: "Add storage and style to your bedroom with this wooden dresser from Modern Furniture. Featuring spacious drawers and a timeless design, this dresser complements any decor.",
    },
    {
      id: 4,
      name: "Floor Cushion",
      seller: "Comfy Designs",
      image: floor_cushion,
      rating: 4.0,
      price: "$189.99",
      description: "Create a cozy seating area with this floor cushion from Comfy Designs. Perfect for lounging or meditation, this cushion adds comfort and warmth to any space.",
    },
    {
      id: 5,
      name: "Wooden Table",
      seller: "Vintage Finds",
      image: table,
      rating: 4.7,
      price: "$149.99",
      description: "Gather around this charming wooden table from Vintage Finds. Whether for meals or gatherings, this table provides a stylish and functional centerpiece for your home.",
    },
    {
      id: 6,
      name: "Contemporary Bookshelf",
      seller: "Bookish Decor",
      image: comingsoon,
      rating: 4.2,
      price: "$199.99",
      description: "Display your favorite books and decorative items on this contemporary bookshelf from Bookish Decor. Featuring sleek lines and ample storage space, this bookshelf adds modern flair to any room.",
    },
    {
      id: 7,
      name: "Antique Sideboard",
      seller: "Elegant Antiques",
      image: comingsoon,
      rating: 4.8,
      price: "$199.99",
      description: "Enhance your dining area with this exquisite antique sideboard from Elegant Antiques. With its intricate details and timeless charm, this sideboard is sure to impress guests.",
    },
    {
      id: 8,
      name: "Mid-Century Ottoman",
      seller: "Retro Designs",
      image: comingsoon,
      rating: 4.4,
      price: "$199.99",
      description: "Add a touch of retro style to your living space with this mid-century ottoman from Retro Designs. Featuring a sleek design and plush upholstery, this ottoman is both functional and fashionable.",
    },
    {
      id: 9,
      name: "Industrial Bar Stool",
      seller: "Urban Furniture",
      image: comingsoon,
      rating: 4.1,
      price: "$199.99",
      description: "Upgrade your kitchen or bar area with these industrial bar stools from Urban Furniture. With their sturdy construction and adjustable height, these stools blend style and functionality seamlessly.",
    },
    {
      id: 10,
      name: "Scandinavian Desk",
      seller: "Nordic Designs",
      image: comingsoon,
      rating: 4.6,
      price: "$199.99",
      description: "Create a productive workspace with this Scandinavian desk from Nordic Designs. Featuring clean lines and ample storage, this desk combines minimalist design with practical functionality.",
    },
    {
      id: 11,
      name: "Farmhouse Bench",
      seller: "Country Living",
      image: comingsoon,
      rating: 4.3,
      price: "$199.99",
      description: "Add rustic charm to your home with this farmhouse bench from Country Living. Whether in your entryway or dining area, this bench provides both seating and style.",
    },
    {
      id: 12,
      name: "Minimalist Bed Frame",
      seller: "Simple Living",
      image: comingsoon,
      rating: 4.5,
      price: "$199.99",
      description: "Create a serene bedroom retreat with this minimalist bed frame from Simple Living. With its clean lines and sturdy construction, this bed frame brings understated elegance to any bedroom decor.",
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
