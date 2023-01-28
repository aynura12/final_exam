import React from "react";
import { useState } from "react";
import "./product.scss";
import axios from "axios";
import { useEffect } from "react";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState({ sorted: "price", reserved: false });
  let URL = "http://localhost:1010/products/";

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // sort data
  const sortData = () => {
    setSorted({ sorted: "price", reserved: !sorted.reserved });
    const copyOfData = [...products];
    copyOfData.sort((a, b) => {
      if (sorted.reserved) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(copyOfData);
  };

  //get data
  const getData = async () => {
    const response = await axios.get(URL);
    setProducts(response.data);
  };

  //delete data
  const handleDelete = (id) => {
    axios.delete(`${URL}${id}`);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="container product-info">
      <h1 id="product_title">OUR PRODUCTS</h1>
      <button id="sort_btn" onClick={() => sortData()}>
        Sort By Price
      </button>
      <form action="">
        <input
          id="search_input"
          type="text"
          placeholder="Search By Name"
          value={search}
          onChange={handleChange}
        />
      </form>
      <div className="row">
        {products
          .filter((prod) => {
            return prod.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((product) => (
            <div className="col-4 products">
              <img id="product_img" src={product.image} alt="img" />
              <h3 id="product_name">{product.name}</h3>
              <p id="product_price">${product.price}.00</p>
              <butoon
                className="btn btn-danger"
                id="product_btn"
                onClick={() => handleDelete(product._id)}
              >
                delete
              </butoon>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;
