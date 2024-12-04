import './cart-content.css';

import { useState } from 'react';
import { useProducts } from '../products-data/ProductContext.jsx';

function Cart() {
  const { products, updateCartStatus } = useProducts();

  const cartProducts = products.filter(product => product.count > 0);

  // calculate total price
  const totalPrice = cartProducts.reduce((total, product) => total + (product.price * product.count), 0);

  const handleCheckout = () => {
    alert("Checkout successful!");
    
    products.forEach(product => updateCartStatus(products.indexOf(product), 0)); // reset all counts to 0
  };

  return (
    <>
      <main>
        <div className="checkout-field">
          <p id='total-price'>Rp. {totalPrice.toLocaleString()}</p> {/* Display formatted total price */}
          <button id='checkout-btn' onClick={handleCheckout}>Checkout</button>
        </div>
        <div className="cart-page">
          {/* first con, there is products in cart */}
          {cartProducts.length > 0 ? (
            cartProducts.map((product, index) => (
              <div key={index} className="cart-product">
                <div className="first-col">
                  <img src={product.img} alt={product.name} />
                  <div className="product-description">
                    <p className="product-name">{product.name}</p>
                    <p className="product-store">{product.store}</p>
                    <p className="product-price">Rp. {product.price}</p>
                  </div>
                </div>
                <div className="second-col">
                  <p className="product-count">{product.count}</p>
                  <p className="product-price-total">Rp. {product.price * product.count}</p>
                </div>
              </div>
            ))
          ) : (
            // no products in cart
            <p className="no-results">Your cart is empty</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Cart;
