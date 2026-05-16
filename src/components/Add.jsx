import axios from "axios";
import React, { useState } from "react";
import "../App.css";
const Add = ({ setAdd }) => {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/products", form).then(() => {
      setAdd(false);
    });
  };

  return (
    <div className="modal">
      <div className="form-box">
        <h1>Add Product</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <input
            type="url"
            placeholder="Image URL"
            name="image"
            value={form.image}
            onChange={handleChange}
          />

          <div className="group">
            <button type="submit" className="btn">
              Add
            </button>

            <button
              type="button"
              onClick={() => setAdd(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;