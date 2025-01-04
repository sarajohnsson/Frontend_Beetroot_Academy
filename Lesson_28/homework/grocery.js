// GROCERY LIST

// Create an array with groceries
// Create a function that displays the grocery list
// Sort the unbought item to appear first
// Create a function that adds items. Check if it's a new item or it already exist. If it already exists, increase the quantity and if it's a new item add it to the list
// Mark item as bought, with a boolean
// Create a function that removes the items

let groceryListItem = [
    {
        name: "Example: Chicken",
        quantity: 1,
        purchased: false,
    },
    {
        name: "Example: Beef",
        quantity: 1,
        purchased: false,
    },
];

const groceryListContainer = document.getElementById("grocery_list");

function displayList() {
    groceryListContainer.innerHTML = "";

    groceryListItem.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list_item");
        listItem.textContent = `${item.name} - Quantity: ${item.quantity}`;

        const purchasedButton = document.createElement("button");
        purchasedButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`;
        purchasedButton.classList.add("btn", "purchased");
        purchasedButton.onclick = () => purchasedItem(index);

        const removeButton = document.createElement("button");
        removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;
        removeButton.classList.add("btn", "remove");
        removeButton.onclick = () => removeItem(index);

        listItem.appendChild(purchasedButton);
        listItem.appendChild(removeButton);

        if (item.purchased) {
            listItem.classList.add("purchased_item");
        }

        groceryListContainer.appendChild(listItem);
    });
}

function addItem() {
    const itemName = document.getElementById("item_name").value.trim();

    const itemQuantity = parseInt(
        document.getElementById("item_quantity").value
    );

    // Checking if any input is missing and if the article already exists or not
    if (itemName && !isNaN(itemQuantity) && itemQuantity > 0) {
        const existingItem = groceryListItem.find(
            (item) => item.name.toLowerCase() === itemName.toLowerCase()
        );

        if (existingItem) {
            existingItem.quantity += itemQuantity;
        } else {
            groceryListItem.push({ name: itemName, quantity: itemQuantity });
        }

        groceryListItem.sort((a, b) => a.name.localeCompare(b.name));

        displayList();

        document.getElementById("item_name").value = "";
        document.getElementById("item_quantity").value = "";
    } else {
        alert("Pleasse enter a valid item name and quantity");
    }
}

// Toggle boolean condition and moving the purchased item to the bottom of the list
function purchasedItem(index) {
    groceryListItem[index].purchased = !groceryListItem[index].purchased;

    groceryListItem.sort((a, b) => {
        if (a.purchased && !b.purchased) {
            return 1;
        } else if (!a.purchased && b.purchased) {
            return -1;
        } else {
            return 0;
        }
    });

    displayList();
}

// Removing an item
function removeItem(index) {
    groceryListItem.splice(index, 1);
    displayList();
}

displayList();
