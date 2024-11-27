// Display a message when a product is added to the cart
function addToCart(productName, price) {
    alert(`🎉 Success! '${productName}' has been added to your cart for ₹${price}.`);
}

// Function to dynamically attach event listeners to buttons
function setupEventListeners() {
    // Select all "Buy Now" buttons
    const buyButtons = document.querySelectorAll("button");

    // Attach click event listeners
    buyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Extract product information
            const productName = button.parentElement.querySelector("h3").innerText;
            const priceText = button.parentElement.querySelector("p").innerText;
            const price = priceText.replace("Price: ₹", ""); // Extract price number

            // Add to cart functionality
            addToCart(productName, price);
        });
    });
}

// Initialize the website scripts
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully! Setting up event listeners...");
    setupEventListeners();
});
