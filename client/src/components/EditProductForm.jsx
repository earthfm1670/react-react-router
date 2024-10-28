import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditProductForm() {
  const navigate = useNavigate();
  const param = useParams();
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editDescribe, setEditDescribe] = useState("");

  useEffect(() => {
    getProduct();
  }, []);

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    try {
      const newProductData = {
        name: editName,
        price: editPrice,
        image: editImage,
        description: editDescribe,
      };
      await axios.put(
        `http://localhost:4001/products/${param.productId}`,
        newProductData
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    const response = await axios.get(
      `http://localhost:4001/products/${param.productId}`
    );
    setEditName(response.data.data.name);
    setEditImage(response.data.data.image);
    setEditPrice(response.data.data.price);
    setEditDescribe(response.data.data.description);
  };

  return (
    <form className="product-form" onSubmit={handleEditSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setEditName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setEditImage(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setEditPrice(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setEditDescribe(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
