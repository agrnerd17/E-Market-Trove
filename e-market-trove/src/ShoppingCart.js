class ShoppingCart {
  constructor() {
      // Initializes the cart with an empty array of items
      this.items = [];
  }

  // Adds an item to the cart or increases the count if it already exists
  addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
          // If the item exists, increase its count
          existingItem.count += 1;
      } else {
          // If the item does not exist, add it with a count of 1
          this.items.push({...item, count: 1});
      }
  }

  // Removes one instance of an item from the cart or removes it completely if only one left
  removeItem(itemId) {
      this.items = this.items.map(item => {
          if (item.id === itemId && item.count > 1) {
              return {...item, count: item.count - 1};
          } else if (item.id === itemId) {
              return null; // Mark for removal
          }
          return item; // No change to other items
      }).filter(item => item != null); // Remove items marked as null
  }

  // Calculates the total price of all items in the cart
  getTotalPrice() {
      return this.items.reduce((total, item) => total + (item.price * item.count), 0);
  }

  // Counts the total number of items in the cart
  getItemCount() {
      return this.items.reduce((total, item) => total + item.count, 0);
  }

  // Clears all items from the cart
  clearCart() {
      this.items = [];
  }
}

export default ShoppingCart; // Export the ShoppingCart class for use elsewhere
