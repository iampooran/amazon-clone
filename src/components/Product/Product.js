import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const fetchProductFromApi = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProductFromApi();
  }, []);

  return (
    <div className="product">
      <div className="leftDetail">
        <img src={product.image} alt="" className="productImage" />
      </div>

      <div className="rightDetail">
        <div>
          <h1>{product.title}</h1>
        </div>
        <div>{product.description}</div>
        <div>
          <h1>Price: {product.price} $</h1>
        </div>

        <button className="button button1">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
