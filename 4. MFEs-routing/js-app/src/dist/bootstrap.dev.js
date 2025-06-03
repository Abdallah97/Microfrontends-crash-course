"use strict";

var _logo = _interopRequireDefault(require("./assets/images/logo.avif"));

require("./style/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var logoElement = document.getElementById('logo');

if (logoElement) {
  logoElement.src = _logo["default"];
}

var orderSummaryElement = document.getElementById('orderSummary');

if (orderSummaryElement) {
  orderSummaryElement.innerHTML = "\n        <div class=\"order-summary-container\">\n            <div class=\"order-header\">\n                <h1>\uD83D\uDCCB Order Summary</h1>\n                <p>Review your order details</p>\n            </div>\n            \n            <div class=\"order-content\">\n                <div class=\"order-number\">\n                    <h2>Order #OS-2025-001</h2>\n                    <div class=\"order-status\">\n                        <span class=\"status-badge confirmed\">Confirmed</span>\n                        <span class=\"order-date\">Placed on June 3, 2025</span>\n                    </div>\n                </div>\n\n                <div class=\"customer-info\">\n                    <h3>Customer Information</h3>\n                    <div class=\"info-grid\">\n                        <div class=\"info-item\">\n                            <strong>Name:</strong> John Doe\n                        </div>\n                        <div class=\"info-item\">\n                            <strong>Email:</strong> john.doe@example.com\n                        </div>\n                        <div class=\"info-item\">\n                            <strong>Phone:</strong> +91 9876543210\n                        </div>\n                        <div class=\"info-item\">\n                            <strong>Address:</strong> 123 Main Street, Mumbai, Maharashtra 400001\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"order-items\">\n                    <h3>Items Ordered</h3>\n                    <div class=\"items-list\">\n                        <div class=\"item-row\">\n                            <div class=\"item-info\">\n                                <span class=\"item-emoji\">\uD83C\uDF55</span>\n                                <div>\n                                    <div class=\"item-name\">Classic Margherita Pizza</div>\n                                    <div class=\"item-category\">Italian</div>\n                                </div>\n                            </div>\n                            <div class=\"item-details\">\n                                <span class=\"quantity\">Qty: 1</span>\n                                <span class=\"price\">\u20B9299</span>\n                            </div>\n                        </div>\n\n                        <div class=\"item-row\">\n                            <div class=\"item-info\">\n                                <span class=\"item-emoji\">\uD83C\uDF5B</span>\n                                <div>\n                                    <div class=\"item-name\">Chicken Biryani</div>\n                                    <div class=\"item-category\">Indian</div>\n                                </div>\n                            </div>\n                            <div class=\"item-details\">\n                                <span class=\"quantity\">Qty: 2</span>\n                                <span class=\"price\">\u20B9798</span>\n                            </div>\n                        </div>\n\n                        <div class=\"item-row\">\n                            <div class=\"item-info\">\n                                <span class=\"item-emoji\">\uD83C\uDF54</span>\n                                <div>\n                                    <div class=\"item-name\">Beef Burger</div>\n                                    <div class=\"item-category\">American</div>\n                                </div>\n                            </div>\n                            <div class=\"item-details\">\n                                <span class=\"quantity\">Qty: 1</span>\n                                <span class=\"price\">\u20B9329</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"price-breakdown\">\n                    <h3>Price Breakdown</h3>\n                    <div class=\"breakdown-list\">\n                        <div class=\"breakdown-row\">\n                            <span>Subtotal</span>\n                            <span>\u20B91,426</span>\n                        </div>\n                        <div class=\"breakdown-row\">\n                            <span>Tax (18%)</span>\n                            <span>\u20B9257</span>\n                        </div>\n                        <div class=\"breakdown-row\">\n                            <span>Delivery Fee</span>\n                            <span class=\"free\">FREE</span>\n                        </div>\n                        <div class=\"breakdown-row discount\">\n                            <span>Discount (SAVE10)</span>\n                            <span>-\u20B9143</span>\n                        </div>\n                        <div class=\"breakdown-row total\">\n                            <span>Total Amount</span>\n                            <span>\u20B91,540</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"delivery-info\">\n                    <h3>Delivery Information</h3>\n                    <div class=\"delivery-details\">\n                        <div class=\"delivery-item\">\n                            <span class=\"delivery-icon\">\uD83D\uDE9A</span>\n                            <div>\n                                <strong>Estimated Delivery:</strong>\n                                <p>June 3, 2025 - 7:30 PM to 8:00 PM</p>\n                            </div>\n                        </div>\n                        <div class=\"delivery-item\">\n                            <span class=\"delivery-icon\">\uD83D\uDCCD</span>\n                            <div>\n                                <strong>Delivery Address:</strong>\n                                <p>123 Main Street, Mumbai, Maharashtra 400001</p>\n                            </div>\n                        </div>\n                        <div class=\"delivery-item\">\n                            <span class=\"delivery-icon\">\uD83D\uDCB3</span>\n                            <div>\n                                <strong>Payment Method:</strong>\n                                <p>Credit Card ending in ****1234</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"order-actions\">\n                    <button class=\"action-btn track-btn\">\uD83D\uDCF1 Track Order</button>\n                    <button class=\"action-btn contact-btn\">\uD83D\uDCDE Contact Support</button>\n                    <button class=\"action-btn receipt-btn\">\uD83D\uDCC4 Download Receipt</button>\n                </div>\n            </div>\n        </div>\n    "; // Add event listeners for action buttons

  var trackBtn = document.querySelector('.track-btn');
  var contactBtn = document.querySelector('.contact-btn');
  var receiptBtn = document.querySelector('.receipt-btn');

  if (trackBtn) {
    trackBtn.addEventListener('click', function () {
      alert('Redirecting to order tracking...');
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', function () {
      alert('Opening customer support chat...');
    });
  }

  if (receiptBtn) {
    receiptBtn.addEventListener('click', function () {
      alert('Downloading receipt...');
    });
  }
}