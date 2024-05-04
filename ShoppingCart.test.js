import ShoppingCart from './ShoppingCart';

describe('ShoppingCart', () => {
    let cart;

    beforeEach(() => {
        // Setup: Create a new ShoppingCart before each test to ensure test isolation
        cart = new ShoppingCart();
    });

    // Test adding a single item to the cart
    test('adds a single item to the cart', () => {
        cart.addItem({ id: 1, name: "Apple", price: 0.99 });
        expect(cart.items.length).toBe(1); // Expect one item in the cart
        expect(cart.getItemCount()).toBe(1); // Total item count should be 1
        expect(cart.getTotalPrice()).toBe(0.99); // Total price should match the item's price
    });

    // Test increasing the count of an existing item in the cart
    test('increases item count if added again', () => {
        cart.addItem({ id: 1, name: "Apple", price: 0.99 });
        cart.addItem({ id: 1, name: "Apple", price: 0.99 });
        expect(cart.getItemCount()).toBe(2); // The count should now be 2
        expect(cart.getTotalPrice()).toBe(1.98); // Total price should be the sum of both items' prices
    });

    // Test removing an item from the cart completely when count drops to zero
    test('removes an item when count is one', () => {
        cart.addItem({ id: 1, name: "Apple", price: 0.99 });
        cart.removeItem(1);
        expect(cart.items.length).toBe(0); // No items should be left in the cart
        expect(cart.getItemCount()).toBe(0); // Item count should be 0
        expect(cart.getTotalPrice()).toBe(0); // Total price should also be 0
    });

    // Test clearing the cart of all items
    test('clears cart correctly', () => {
        cart.addItem({ id: 1, name: "Apple", price: 0.99 });
        cart.addItem({ id: 2, name: "Banana", price: 0.59 });
        cart.clearCart();
        expect(cart.items.length).toBe(0); // The cart should be empty
        expect(cart.getTotalPrice()).toBe(0); // Total price should be 0 after clearing the cart
    });
});
