import './content.css';
import { useState } from 'react';
import { useProducts } from '../products-data/ProductContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Promo() {
  const { products, toggleWishlist, updateCartStatus } = useProducts();

  const [searchQuery, setSearchQuery] = useState('');

  // filter only products with discpunts
  const promoProducts = products.filter((product) => product.isDiscount);

  // search for promo products
  const filteredPromoProducts = promoProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const subtractItemCount = (originalIndex) => {
    if (products[originalIndex].count > 0) {
      updateCartStatus(originalIndex, products[originalIndex].count - 1);
    }
  };

  const addItemCount = (originalIndex) => {
    updateCartStatus(originalIndex, products[originalIndex].count + 1);
  };

  const handleWishlist = (originalIndex) => {
    toggleWishlist(originalIndex);
  };

  return (
    <>
      <div className="content-manipulator">
        <input
          id="search-bar"
          type="text"
          placeholder="Search for products....."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="products-container">
        {/* check if there are promo products */}
        {promoProducts.length > 0 ? (
          // if yes, show the filtered products based on search quert
          filteredPromoProducts.length > 0 ? (
            filteredPromoProducts.map((product) => {
              const originalIndex = products.findIndex(
                (p) => p.name === product.name
              ); // make sure the index is right or otherwise the add or subtract button will operate on different product

              return (
                <div key={originalIndex} className="product-card">
                  <img src={product.img} alt="" className="product-img" />
                  <div className="product-description">
                    <div className="top-description">
                      <p className="product-name">{product.name}</p>
                      <FontAwesomeIcon
                        className={`heart-icon ${product.isWishlist ? 'red' : ''
                          }`}
                        icon={faHeart}
                        onClick={() => handleWishlist(originalIndex)}
                      />
                    </div>
                    <p className="product-price">Rp. {product.price}</p>
                    {product.isDiscount ? (
                      <p className="product-old-price">Rp. {product.oldPrice}</p>
                    ) : (
                      <p className="no-discount">&nbsp;</p>
                    )}
                    <p className="product-store">{product.store}</p>
                    <p className="product-location">{product.location}</p>
                    <div className="cart-operations">
                      <button
                        onClick={() => subtractItemCount(originalIndex)}
                        className="btn-subtract"
                      >
                        -
                      </button>
                      <p className="item-count">{product.count}</p>
                      <button
                        onClick={() => addItemCount(originalIndex)}
                        className="btn-add"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            // no products match the search query
            <p className="no-results">No products found for "{searchQuery}"</p>
          )
        ) : (
          // if no promo products
          <p className="no-results">No products on discount at the moment.</p>
        )}
      </div>
    </>
  );
}

export default Promo;
