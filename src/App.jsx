import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDelete, productGet } from "./redux/productSlice";
import "./App.css";
import Add from "./components/Add";
import Edit from "./components/Edit";
const App = () => {
  const { isLoading, isError, data } = useSelector((state) => state.product);
  console.log(isLoading, isError, data);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(0);
  const toogleAdd = () => {
    setAdd(true);
  };
  const handleEdit = (id) => {
    setEdit(true);
    setEditId(id);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productGet());
  }, []);
  return (
    <div>
      {isLoading ? <h1>Loading . . . . .</h1> : null}
      {isError ? <h1>{isError}</h1> : null}
      {edit ? <Edit setEdit={setEdit} editId={editId} /> : null}
      {add ? <Add setAdd={setAdd} /> : null}

      <div className="asdf">
        <button
          className="btn btn2"
          onClick={() => {
            toogleAdd();
          }}
        >
          Create Product
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.image}
                    width={"80px"}
                    height={"85px"}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>Price: {item.price}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>
                  <button className="btn" onClick={() => handleEdit(item.id)}>
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if(window.confirm("Are you sure?")){
                        dispatch(productDelete(item.id));
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
