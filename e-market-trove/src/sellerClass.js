// Declare Seller Class
class Seller {
    constructor(name, id, phone, location) { // specify parameters

      this.name = name; // expect string
      this.id = id; // expect int
      this.phone = phone; // expect int
      this.location = location; // expect string
       // Initialize arrays to store items and managed accounts
      this.items_list = []; 
      this.accounts_list = [];
    }

    // Getters 
    get items() {
    return this.items_list;
    }
    get accounts() {
      return this.accounts_list;
    }
    get shipment() {
      return this.ship_out;
    }
  
    // Methods
    list_items(item) {
      this.items_list.push(item); // push items onto array
      return this.items_list;
    }
    manage_account(account) {
      this.accounts_list.push(account); // push account onto array
      return this.accounts_list;
    }
    ship_out(item) {
      if (this.items_list.includes(item)) { // if the is item in stock then ship
        console.log(`${item} shipped out by ${this.name}`);    
      } else { // else don't ship
        console.log(`${item} not listed by ${this.name}`);
      }
      return this.ship_out;
    }
  }

// Placerholder code to test if the class is working
const seller1 = new Seller("Write name here", 12, 1234567890, "Location here")
  seller1.manage_account("Account1")
  seller1.list_items("Shirt")
  seller1.list_items("Book")
  seller1.ship_out("Shirt")
  seller1.ship_out("Book");