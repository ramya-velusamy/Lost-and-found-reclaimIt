import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../component/Style.css';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/shopItems') // ✅ Corrected to 4000
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching shop items');
        setLoading(false);
      });
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const filteredProducts = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory ? item.category === filterCategory : true)
    );
  });

  return (
    <div className="shop-container">
      <h2>🛒 Shop Now</h2>

      {/* Search & Filter */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Stationery">Stationery</option>
          <option value="Fashion">Fashion</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Loading & Error */}
      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.map(item => (
          <div key={item._id} className="product-card"> {/* ✅ Use MongoDB _id */}
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">₹{item.price}</p>
            <button className="buy-btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h3>🛍 Your Cart ({cart.length} items)</h3>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
