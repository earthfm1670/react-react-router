import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function CreateProductForm() {
  const navigate = useNavigate();
  const [nameState, setNameState] = useState("");
  const [imageState, setImageState] = useState("");
  const [priceState, setPriceState] = useState(0);
  const [describeState, setDescribeState] = useState("");

  const handleCreateSubmit = async (event) => {
    event.preventDefault();
    try {
      const newProductData = {
        name: nameState,
        price: priceState,
        image: imageState,
        description: describeState,
      };
      await axios.post("http://localhost:4001/products", newProductData);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleCreateSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={nameState}
            onChange={(event) => {
              setNameState(event.target.value);
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
            value={imageState}
            onChange={(event) => {
              setImageState(event.target.value);
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
            value={priceState}
            onChange={(event) => {
              setPriceState(event.target.value);
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
            value={describeState}
            onChange={(event) => {
              setDescribeState(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
