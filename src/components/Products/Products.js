import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProductFromApi = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProductFromApi();
  }, []);

  return (
    <React.Fragment>
      {console.log(products)}
      <div className="grid-container">
        {products.map((product, index) => {
          return (
            <span className="grid-item" key={index}>
              <Link to={`/product/${product.id}`} className="linkTitle">
                <img src={product.image} alt="" id="gridImage" />
                <span className="title">{product.title}</span>
              </Link>
            </span>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Products;
