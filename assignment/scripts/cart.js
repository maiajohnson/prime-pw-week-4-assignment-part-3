console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array.

let basket = [];

// Create a function called addItem. It should:
// take an input parameter for a string item
// add the new item to the global array basket.
// return true indicating the item was added

function addItem(item) {
    basket.push(item);
    return true;
}

addItem('banana');
addItem('melon');
addItem('apple');

// Create a function called listItems. It should:
// loop over the items in the basket array
// console.log each individual item on a new line

function listItems() {
    for (let index = 0; index < basket.length; index++) {
      console.log(basket[index]);
    }
}

listItems();


// Create a function called empty. It should:

// reset the basket to an empty array
