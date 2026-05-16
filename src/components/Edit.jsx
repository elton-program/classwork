import axios from "axios";
import React, { useEffect, useState } from "react";

const Edit = ({ setEdit, editId }) => {
  const [formData, setFormData] = useState({
    id: editId,
    name: "",
    price: 0,
    category: "",
    description:"",
    image: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${editId}`).then((data) => {
      const res = data?.data;
      setFormData({
        name: res?.name,
        price: res?.price,
        description: res?.description,
        category: res?.category,
        image: res?.image,
      });
    });
  }, [editId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3000/products/${editId}`, formData).then(() => {
      setEdit(false);
    });
  };

  return (
    <div className="modal edit-modal">
      <form className="form edit-form" onSubmit={handleSubmit}>
        <input
          className="input"
          onChange={handleChange}
          type="text"
          name="name"
          value={formData.name}
        />

        <input
          className="input"
          onChange={handleChange}
          type="number"
          name="price"
          value={formData.price}
        />

        <input
          className="input"
          onChange={handleChange}
          type="text"
          name="category"
          value={formData.category}
        />
        <input
          className="input"
          onChange={handleChange}
          type="text"
          name="description"
          value={formData.description}
        />
        <input
          className="input"
          onChange={handleChange}
          type="url"
          name="image"
          value={formData.image}
        />

        

        <div className="btn-group">
          <button className="btn btn-save">Save</button>

          <button
            type="button"
            className="btn btn-close"
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
