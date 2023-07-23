
// This test checks that the shopping cart can remove an item.
test('Can remove item from shopping cart', () => {
  const shoppingCart = new ShoppingCart();
  const item = {
    id: 1,
    name: 'T-shirt',
    price: 10,
  };
  shoppingCart.addItem(item);
  shoppingCart.removeItem(item);
  expect(shoppingCart.items).toEqual([]);
});

// This test checks that the shopping cart can clear all items.
test('Can clear shopping cart', () => {
  const shoppingCart = new ShoppingCart();
  const item1 = {
    id: 1,
    name: 'T-shirt',
    price: 10,
  };
  const item2 = {
    id: 2,
    name: 'Jeans',
    price: 20,
  };
  shoppingCart.addItem(item1);
  shoppingCart.addItem(item2);
  shoppingCart.clear();
  expect(shoppingCart.items).toEqual([]);
});

// This test checks that the shopping cart can update the quantity of an item.
test('Can update quantity of item in shopping cart', () => {
  const shoppingCart = new ShoppingCart();
  const item = {
    id: 1,
    name: 'T-shirt',
    price: 10,
  };
  shoppingCart.addItem(item, 2);
  expect(shoppingCart.items[0].quantity).toEqual(2);
});

// This test checks that the shopping cart throws an error if you try to add an item that already exists.
test('Throws error if you try to add duplicate item to shopping cart', () => {
  const shoppingCart = new ShoppingCart();
  const item = {
    id: 1,
    name: 'T-shirt',
    price: 10,
  };
  shoppingCart.addItem(item);
  expect(() => shoppingCart.addItem(item)).toThrowError('Item already exists');
});

function loadTests() {
    /**
     * This function loads and runs multiple tests simultaneously.
     * 
     * Returns:
     * Promise: A promise that resolves when all tests have completed.
     */
    
    // Create an array to store the promises for each test
    const testPromises = [];
    
    // Test 1: Load and run test 1
    const test1Promise = new Promise((resolve, reject) => {
        // Load and run test 1
        // Replace the code below with the actual code for test 1
        setTimeout(() => {
            console.log("Test 1 completed");
            resolve();
        }, 2000);
    });
    testPromises.push(test1Promise);
    
    // Test 2: Load and run test 2
    const test2Promise = new Promise((resolve, reject) => {
        // Load and run test 2
        // Replace the code below with the actual code for test 2
        setTimeout(() => {
            console.log("Test 2 completed");
            resolve();
        }, 3000);
    });
    testPromises.push(test2Promise);
    
    // Test 3: Load and run test 3
    const test3Promise = new Promise((resolve, reject) => {
        // Load and run test 3
        // Replace the code below with the actual code for test 3
        setTimeout(() => {
            console.log("Test 3 completed");
            resolve();
        }, 2500);
    });
    testPromises.push(test3Promise);
    
    // Return a promise that resolves when all tests have completed
    return Promise.all(testPromises);
}

// Example usage:
loadTests()
    .then(() => {
        console.log("All tests completed");
    })
    .catch((error) => {
        console.error("Error occurred during test execution:", error);
    });
