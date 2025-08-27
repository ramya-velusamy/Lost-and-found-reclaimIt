import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../component/Style.css';

const FoundItems = () => {
  const [form, setForm] = useState({
    itemName: '',
    country: '',
    state: '',
    city: '',
    location: '',
    date: '',
    description: '',
    contact: '',
    image: ''
  });
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/foundItems')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/foundItems', form);
      alert('Found item submitted!');
      setForm({ itemName: '', country: '', state: '', city: '', location: '', date: '', description: '', contact: '', image: '' });
      const res = await axios.get('http://localhost:4000/foundItems');
      setItems(res.data);
    } catch (err) {
      alert('Submission failed.');
    }
  };

  return (
    <div className="form-container">
      <h2>Report a Found Item</h2>
      <form onSubmit={handleSubmit}>
        <label className="required">Item Name</label>
        <input type="text" name="itemName" value={form.itemName} onChange={handleChange} required />

        <label className="required">Country</label>
        <select name="country" value={form.country} onChange={handleChange} required>
          <option value="">Select Country</option>
          <option value="India">India</option>
        </select>

        <label className="required">State</label>
        <select name="state" value={form.state} onChange={handleChange} required>
          <option value="">Select State</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
        </select>

        <label className="required">City</label>
        <select name="city" value={form.city} onChange={handleChange} required>
          <option value="">Select City</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Chennai">Chennai</option>
        </select>

        <label className="required">Exact Location</label>
        <input type="text" name="location" value={form.location} onChange={handleChange} required />

        <label className="required">Date</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />

        <label className="required">Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} required />

        <label className="required">Contact Info</label>
        <input type="text" name="contact" value={form.contact} onChange={handleChange} required />

        <label>Image URL (optional)</label>
        <input type="text" name="image" value={form.image} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>

      <h3>Reported Found Items</h3>
      <div className="items-list">
        {items.map((item) => (
          <div key={item.id} className="lost-item-card">
            {item.image && <img src={item.image} alt={item.itemName} className="lost-img" />}
            <h4>{item.itemName}</h4>
            <p><strong>Location:</strong> {item.city}, {item.state}, {item.country}</p>
            <p><strong>Exact Spot:</strong> {item.location}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p>{item.description}</p>
            <p><strong>Contact:</strong> {item.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundItems;
