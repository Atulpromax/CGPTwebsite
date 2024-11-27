// Highlight the current page in the navigation
function highlightCurrentPage() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });
}

// Simulate a simple cart for future expansion
const cart = [];

// Add a product to the cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`🎉 '${productName}' has been added to your cart for ₹${price}.`);
}

// Validate the checkout form (if needed for an actual gateway later)
function validateCheckoutForm() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");

        if (!nameInput.value.trim() || !emailInput.value.trim()) {
            alert("Please fill in all the required fields.");
            event.preventDefault();
        } else {
            alert("Proceeding to payment...");
        }
    });
}

// Initialize scripts for all pages
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");

    // Highlight navigation links
    highlightCurrentPage();

    // Additional page-specific logic
    const page = window.location.pathname.split("/").pop();

    if (page === "products.html") {
        // Add event listeners to "Buy Now" buttons
        const buyButtons = document.querySelectorAll(".button");
        buyButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const productName = button.parentElement.querySelector("h2").innerText;
                const priceText = button.parentElement.querySelector("p").innerText;
                const price = priceText.replace("Price: ₹", ""); // Extract price
                addToCart(productName, price);
            });
        });
    }

    if (page === "checkout.html") {
        // Validate the checkout form
        validateCheckoutForm();
    }
});
