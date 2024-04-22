class ShoppingCart {
    // Constructor to initialize the shopping cart
    constructor() {
      this.items = []; // Starts with an empty array of items
    }
  
    // Method to add an item to the cart
    addItem(item) {
      // Check if the item already exists in the cart
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        // If the item exists, increase its count
        existingItem.count += 1;
      } else {
        // If the item does not exist, add it with a count of 1
        this.items.push({...item, count: 1});
      }
    }
  
    // Method to remove an item from the cart
    removeItem(itemId) {
      // Find the item by ID
      const existingItem = this.items.find(item => item.id === itemId);
      if (existingItem && existingItem.count > 1) {
        // If the item exists and the count is greater than 1, decrease the count
        existingItem.count -= 1;
      } else {
        // If the count is 1, remove the item completely from the cart
        this.items = this.items.filter(item => item.id !== itemId);
      }
    }
  
    // Method to calculate the total price of all items in the cart
    getTotalPrice() {
      // Reduce the cart items to a total using the discounted price and item count
      return this.items.reduce((total, item) => total + (item.discounted_price * item.count), 0);
    }
  
    // Method to get the total count of all items in the cart
    getItemCount() {
      // Reduce the cart items to a total count
      return this.items.reduce((total, item) => total + item.count, 0);
    }
  
    // Method to clear all items from the cart
    clearCart() {
      this.items = []; // Reset the items array to empty
    }
  }
  
  export default ShoppingCart; // Export the ShoppingCart class for use elsewhere
  
  