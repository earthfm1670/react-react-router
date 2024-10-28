import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ViewProductPage() {
  const [viewName, setViewName] = useState("");
  const [viewImg, setViewImg] = useState("");
  const [viewPrice, setViewPrice] = useState("");
  const [viewDescription, setViewDescription] = useState("");

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    getViewProduct();
  }, []);

  const getViewProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/products/${param.productId}`
      );
      console.log(response);
      setViewName(response.data.data.name); //เข้า data ของ axios ก่อนแล้วค่อยเข้าสู่ data
      setViewImg(response.data.data.image);
      setViewPrice(response.data.data.price);
      setViewDescription(response.data.data.description);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <div>
          <img src={viewImg} />
        </div>
        <h2>{viewName}</h2>
        <h3>Price: {viewPrice}</h3>
        <p>{viewDescription}</p>
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
