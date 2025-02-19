// SHOPPING CART

// Create an array with some products
// Create a function that displays the product on a receipt
// Create a function that shows the total purchase cost
// Create a function that finds the most expensive object
// Create a function that calculates the average price

let products = [
    {
        name: "Banana",
        image: "./assets/banana.jpg",
        amount: 3,
        pricePerItem: 24.95,
    },
    {
        name: "Papaya",
        image: "./assets/papaya.jpg",
        amount: 1,
        pricePerItem: 52.95,
    },
    {
        name: "Avocado",
        image: "./assets/avocado.jpg",
        amount: 2,
        pricePerItem: 12.95,
    },
    {
        name: "Strawberries",
        image: "./assets/strawberry.jpg",
        amount: 6,
        pricePerItem: 69.95,
    },
    {
        name: "Melon",
        image: "./assets/melon.jpg",
        amount: 1,
        pricePerItem: 43.95,
    },
    {
        name: "Cherry",
        image: "./assets/cherry.jpg",
        amount: 3,
        pricePerItem: 23.95,
    },
    {
        name: "Apple",
        image: "./assets/apple.jpg",
        amount: 4,
        pricePerItem: 32.95,
    },
    {
        name: "Blueberry",
        image: "./assets/blueberry.jpg",
        amount: 7,
        pricePerItem: 29.95,
    },
];

const productContainer = document.getElementById("product_cards");

function displayProducts() {
    productContainer.innerHTML = "";

    products.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("product_list");
        listItem.innerHTML = `
            <div class="product">
                <div class="product_info">
                    <h3>${item.name}</h3>
                    <p>Qty: ${item.amount}</p>
                    <p>Price: ${item.pricePerItem.toFixed(2)} SEK</p>
                </div>
                <img src="${item.image}" alt="${item.name}" />
            </div>
        `;

        productContainer.appendChild(listItem);
    });

    displayCalculations();
}

function displayCalculations() {
    // Calculate total cost
    const initialValue = 0;
    const totalCost = products.reduce(
        (total, item) => total + item.pricePerItem * item.amount,
        initialValue
    );

    // Calculate average price
    const totalAmount = products.reduce(
        (total, item) => total + item.amount,
        initialValue
    );

    const averageCost = totalCost / totalAmount;

    document.getElementById("total_cost").textContent = `${totalCost.toFixed(
        2
    )} SEK`;

    document.getElementById(
        "average_price"
    ).textContent = `${averageCost.toFixed(2)} SEK`;

    // Find the most expensive item
    let maxValue = 0;

    const values = Object.values(products);

    values.map((item) => {
        const valueFromObject = item.pricePerItem;
        maxValue = Math.max(maxValue, valueFromObject);
    });

    document.getElementById("most_expensive").textContent = `${maxValue.toFixed(
        2
    )} SEK`;
}

displayProducts();

// Add function to add/remove amount of items with + or - button
