import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ViewProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  // const [data, setData] = useState([]);
  const { Id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get(`http://localhost:4001/products/${Id}`);
    // setData(response.data.data);
    setName(response.data.data.name);
    setPrice(response.data.data.price);
    setUrl(response.data.data.image);
    setDescription(response.data.data.description);
  };

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{name}</h2>
        <img src={url} />
        <p>{price}</p>
        <p>{description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
