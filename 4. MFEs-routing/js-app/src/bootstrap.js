import logo from "./assets/images/logo.avif";
import "./style/style.css";

const logoElement = document.getElementById('logo');

if (logoElement) {
    logoElement.src = logo;
}

const orderSummaryElement = document.getElementById('orderSummary');

if (orderSummaryElement) {
    orderSummaryElement.innerHTML = `
        <div class="order-summary-container">
            <div class="order-header">
                <h1>📋 Order Summary</h1>
                <p>Review your order details</p>
            </div>
            
            <div class="order-content">
                <div class="order-number">
                    <h2>Order #OS-2025-001</h2>
                    <div class="order-status">
                        <span class="status-badge confirmed">Confirmed</span>
                        <span class="order-date">Placed on June 3, 2025</span>
                    </div>
                </div>

                <div class="customer-info">
                    <h3>Customer Information</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Name:</strong> John Doe
                        </div>
                        <div class="info-item">
                            <strong>Email:</strong> john.doe@example.com
                        </div>
                        <div class="info-item">
                            <strong>Phone:</strong> +91 9876543210
                        </div>
                        <div class="info-item">
                            <strong>Address:</strong> 123 Main Street, Mumbai, Maharashtra 400001
                        </div>
                    </div>
                </div>

                <div class="order-items">
                    <h3>Items Ordered</h3>
                    <div class="items-list">
                        <div class="item-row">
                            <div class="item-info">
                                <span class="item-emoji">🍕</span>
                                <div>
                                    <div class="item-name">Classic Margherita Pizza</div>
                                    <div class="item-category">Italian</div>
                                </div>
                            </div>
                            <div class="item-details">
                                <span class="quantity">Qty: 1</span>
                                <span class="price">₹299</span>
                            </div>
                        </div>

                        <div class="item-row">
                            <div class="item-info">
                                <span class="item-emoji">🍛</span>
                                <div>
                                    <div class="item-name">Chicken Biryani</div>
                                    <div class="item-category">Indian</div>
                                </div>
                            </div>
                            <div class="item-details">
                                <span class="quantity">Qty: 2</span>
                                <span class="price">₹798</span>
                            </div>
                        </div>

                        <div class="item-row">
                            <div class="item-info">
                                <span class="item-emoji">🍔</span>
                                <div>
                                    <div class="item-name">Beef Burger</div>
                                    <div class="item-category">American</div>
                                </div>
                            </div>
                            <div class="item-details">
                                <span class="quantity">Qty: 1</span>
                                <span class="price">₹329</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="price-breakdown">
                    <h3>Price Breakdown</h3>
                    <div class="breakdown-list">
                        <div class="breakdown-row">
                            <span>Subtotal</span>
                            <span>₹1,426</span>
                        </div>
                        <div class="breakdown-row">
                            <span>Tax (18%)</span>
                            <span>₹257</span>
                        </div>
                        <div class="breakdown-row">
                            <span>Delivery Fee</span>
                            <span class="free">FREE</span>
                        </div>
                        <div class="breakdown-row discount">
                            <span>Discount (SAVE10)</span>
                            <span>-₹143</span>
                        </div>
                        <div class="breakdown-row total">
                            <span>Total Amount</span>
                            <span>₹1,540</span>
                        </div>
                    </div>
                </div>

                <div class="delivery-info">
                    <h3>Delivery Information</h3>
                    <div class="delivery-details">
                        <div class="delivery-item">
                            <span class="delivery-icon">🚚</span>
                            <div>
                                <strong>Estimated Delivery:</strong>
                                <p>June 3, 2025 - 7:30 PM to 8:00 PM</p>
                            </div>
                        </div>
                        <div class="delivery-item">
                            <span class="delivery-icon">📍</span>
                            <div>
                                <strong>Delivery Address:</strong>
                                <p>123 Main Street, Mumbai, Maharashtra 400001</p>
                            </div>
                        </div>
                        <div class="delivery-item">
                            <span class="delivery-icon">💳</span>
                            <div>
                                <strong>Payment Method:</strong>
                                <p>Credit Card ending in ****1234</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="order-actions">
                    <button class="action-btn track-btn">📱 Track Order</button>
                    <button class="action-btn contact-btn">📞 Contact Support</button>
                    <button class="action-btn receipt-btn">📄 Download Receipt</button>
                </div>
            </div>
        </div>
    `;

    // Add event listeners for action buttons
    const trackBtn = document.querySelector('.track-btn');
    const contactBtn = document.querySelector('.contact-btn');
    const receiptBtn = document.querySelector('.receipt-btn');

    if (trackBtn) {
        trackBtn.addEventListener('click', () => {
            alert('Redirecting to order tracking...');
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            alert('Opening customer support chat...');
        });
    }

    if (receiptBtn) {
        receiptBtn.addEventListener('click', () => {
            alert('Downloading receipt...');
        });
    }
}

