import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const { Id } = useParams();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/products/${Id}`);
      setName(response.data.data.name);
      setUrl(response.data.data.image);
      setPrice(response.data.data.price);
      setDescription(response.data.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updateProduct = {
      name: name,
      image: url,
      price: price,
      description: description,
    };
    try {
      const response = await axios.put(
        `http://localhost:4001/products/${Id}`,
        updateProduct
      );
      console.log("Product has been updated", response.data);
      navigate("/");
    } catch (error) {
      console.log("Error updating product", error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="Enter name here"
            onChange={(event) => setName(event.target.value)}
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
            value={url}
            placeholder="Enter image url here"
            onChange={(event) => setUrl(event.target.value)}
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
            value={price}
            placeholder="Enter price here"
            onChange={(event) => setPrice(event.target.value)}
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
            value={description}
            placeholder="Enter description here"
            onChange={(event) => setDescription(event.target.value)}
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
