import logo from "./assets/images/logo.avif";
import "./style/style.css";

const logoElement = document.getElementById('logo');

if (logoElement) {
    logoElement.src = logo;
}

const foodElement = document.getElementById('foodItems');

if (foodElement) {
    foodElement.innerHTML = `
    <h1>Food Items</h1>
    <h3 class="item">Biryani</h3>
    <h3 class="item">Pizza</h3>
    <h3 class="item">Fast Food</h3>
`;
}

