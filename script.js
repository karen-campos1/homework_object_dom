// Task 1: Product Array
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Function to display products
function displayProducts() {
    let container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear previous products
    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

        let productName = document.createElement('h2');
        productName.textContent = product.name;

        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);
        container.appendChild(productDiv);
    });
}

// Task 3: Event listener to display products on page load
document.addEventListener('DOMContentLoaded', displayProducts);

// Form Manipulation
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log(user);

    // Form validation
    if (validateForm(user)) {
        alert("Form submitted successfully!");
        // Optionally, you can reset the form here
        document.getElementById('userForm').reset();
    } else {
        alert("Please fill all required fields.");
    }
});

function validateForm(user) {
    return user.name !== "" && user.email !== "" && user.message !== "";
}

// Dynamic Styling
function changeColor() {
    const box = document.getElementById('box');
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const currentColor = box.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    box.style.backgroundColor = newColor;
}

let index = 0

function changeSize() {
    const text = document.getElementById('text');
    const sizes = ['16px', '20px', '24px', '28px', '32px'];
    const currentSize = text.style.fontSize;
   
    // let newSize = sizes[Math.floor(Math.random() * sizes.length)];

    // while (newSize === currentSize) {
    //     newSize = sizes[Math.floor(Math.random() * sizes.length)];
    // }
    if (index == sizes.length-1) {
        index = 0
    }
    text.style.fontSize = sizes[index++];
}

document.getElementById('hoverBox').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

document.getElementById('hoverBox').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'initial';
});

document.getElementById('inputField').addEventListener('focus', function() {
    this.style.borderColor = 'blue';
});

document.getElementById('inputField').addEventListener('blur', function() {
    this.style.borderColor = 'initial';
});
