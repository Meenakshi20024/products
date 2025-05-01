import React, { useContext, useState } from "react";
import "./checkout.css";
import { ShopContext } from "../context/shop-context";

export const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const subtotal = getTotalCartAmount();
  const tax = 30;
  const shipping = 0;
  const total = subtotal + tax;

  const [selectedPayment, setSelectedPayment] = useState("Card");
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
  };

  const handleSubmit = () => {
    alert(`Order placed successfully!\nPayment via: ${selectedPayment}`);
  };

  return (
    <div className="checkout-page">
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">Subtotal: Rs {subtotal}</div>
        <div className="summary-item">Shipping: Free</div>
        <div className="summary-item">Tax: Rs {tax}</div>
        <div className="summary-item total">Total: Rs {total}</div>
      </div>

      <div className="payment-method">
        <h2>Payment Method</h2>
        <div
          className={`payment-option ${
            selectedPayment === "Card" ? "selected" : ""
          }`}
          onClick={() => handlePaymentSelection("Card")}
        >
          <h4>💳 Debit/Credit Card</h4>
          <p>Pay securely with your card</p>
        </div>
        <div
          className={`payment-option ${
            selectedPayment === "UPI" ? "selected" : ""
          }`}
          onClick={() => handlePaymentSelection("UPI")}
        >
          <h4>📱 UPI</h4>
          <p>Google Pay , PhonePe , Paytm , Bhim , Razor Pay</p>
        </div>
        <div
          className={`payment-option ${
            selectedPayment === "Paytm" ? "selected" : ""
          }`}
          onClick={() => handlePaymentSelection("Paytm")}
        >
          <h4>🖨️ Netbanking</h4>
          <p>Pay via your bank account</p>
        </div>
        <div
          className={`payment-option ${
            selectedPayment === "COD" ? "selected" : ""
          }`}
          onClick={() => handlePaymentSelection("COD")}
        >
          <h4>💵 Cash on Delivery</h4>
          <p>Pay when you receive</p>
        </div>

        <div className="billing-details">
          <h2>Billing Details</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={billingDetails.fullName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={billingDetails.phoneNumber}
            onChange={handleInputChange}
          />
          <textarea
            name="address"
            placeholder="Address"
            value={billingDetails.address}
            onChange={handleInputChange}
          />
        </div>

        <button className="total-button" onClick={handleSubmit}>
          Pay Rs {total} & Place Order
        </button>
      </div>
    </div>
  );
};
