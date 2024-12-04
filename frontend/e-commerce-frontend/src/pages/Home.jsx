import './content.css';

import { useState } from 'react';
import { useProducts } from '../products-data/ProductContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const { products, toggleWishlist, updateCartStatus } = useProducts();
    const [searchQuery, setSearchQuery] = useState('');

    console.log(products);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // filter the products based on search res
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) // case-insensitive
    );

    const subtractItemCount = (index) => {
        if (products[index].count > 0) {
            updateCartStatus(index, products[index].count - 1);
        }
    };

    const addItemCount = (index) => {
        updateCartStatus(index, products[index].count + 1);
    };

    const handleWishlist = (index) => {
        console.log("toggle wishlist");
        toggleWishlist(index);
    };

    return (
        <>
            <div className="content-manipulator">
                <input
                    id="search-bar"
                    type="text"
                    placeholder="Search for products....."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="products-container">
                {/* first con, check if there are any products available */}
                {products.length > 0 ? (
                    // second con, check if any products match the search query
                    filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <div key={index} className="product-card">
                                <img src={product.img} alt="" className="product-img" />
                                <div className="product-description">
                                    <div className="top-description">
                                        <p className="product-name">{product.name}</p>
                                        <FontAwesomeIcon
                                            className={`heart-icon ${product.isWishlist ? 'red' : ''}`}
                                            icon={faHeart}
                                            onClick={() => handleWishlist(index)}
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
                                        <button onClick={() => subtractItemCount(index)} className="btn-subtract">
                                            -
                                        </button>
                                        <p className="item-count">{product.count}</p>
                                        <button onClick={() => addItemCount(index)} className="btn-add">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // show message if no products match the search query
                        <p className="no-results">No products found for "{searchQuery}"</p>
                    )
                ) : (
                    // fallback, show message if there are no products available
                    <p className="no-results">No products available</p>
                )}
            </div>
        </>
    );
}

export default Home;
