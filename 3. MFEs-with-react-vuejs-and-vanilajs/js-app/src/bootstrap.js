import logo from "./assets/images/logo.avif";
import "./style/style.css";

document.getElementById('logo').src = logo;

document.getElementById('foodItems').innerHTML = `
    <h1>Food Items</h1>
    <h3 class="item">Biryani</h3>
    <h3 class="item">Pizza</h3>
    <h3 class="item">Fast Food</h3>
`;
