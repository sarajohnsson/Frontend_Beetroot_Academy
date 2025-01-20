// Create an html-page with a large table.
// When clicking the column heading, it is necessary to sort data of that column.
// Note that numerical values should be sorted as numbers, not as strings.

let groceryList = [
    {
        name: "Chicken",
        price: 69.95,
        type: "Meat",
    },
    {
        name: "Beef",
        price: 159.5,
        type: "Meat",
    },
    {
        name: "Potato",
        price: 19.95,
        type: "Fruit",
    },
    {
        name: "Greek Yoghurt",
        price: 39.95,
        type: "Dairy",
    },
    {
        name: "Rice",
        price: 45.95,
        type: "Pantry",
    },
    {
        name: "Peanut Butter",
        price: 34.95,
        type: "Pantry",
    },
];

function createItem(text, className) {
    const item = document.createElement("div");
    item.className = className;
    item.textContent = text;
    return item;
}

function displayGroceries() {
    const groceriesContainer = document.querySelector(".groceries_container");

    while (groceriesContainer.children.length > 3) {
        groceriesContainer.removeChild(groceriesContainer.lastChild);
    }

    groceryList.forEach((item) => {
        groceriesContainer.append(createItem(item.name, "article"));
        groceriesContainer.append(createItem(item.price, "article"));
        groceriesContainer.append(createItem(item.type, "article"));
    });
}

function sortName() {
    groceryList.sort((a, b) => a.name.localeCompare(b.name));
    // console.log(groceryList);

    displayGroceries();
}

function sortPrice() {
    groceryList.sort((a, b) => a.price - b.price);

    displayGroceries();
}

function sortType() {
    groceryList.sort((a, b) => a.type.localeCompare(b.type));

    displayGroceries();
}

displayGroceries();
