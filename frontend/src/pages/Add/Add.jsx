import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddDataScheme } from "../../Scheme/AddDataScheme";
import { useForm } from "react-hook-form";
import "./add.scss";
import { useState } from "react";
import axios from "axios";
import Helmet from "react-helmet";

const Add = () => {
  const [data, setData] = useState({
    name: "",
    price: null,
    image: "",
  });
  const BASE_URL = "http://localhost:1010/products";

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //add product
  const addData = () => {
    axios.post(BASE_URL, data);
    setData({
      name: "",
      price: null,
      image: "",
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AddDataScheme) });
  const formData = (data) => {
    console.log(data);
  };
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <section className="container">
        <form onSubmit={handleSubmit(formData)} id="form">
          <div class="form-group">
            <input
              {...register("name")}
              type="text"
              class="form-control"
              id="productname"
              aria-describedby="emailHelp"
              placeholder="Product Name"
              name="name"
              onChange={handleChange}
            />
            {errors.name ? (
              <span style={{ color: "red" }}>{errors.name.message}</span>
            ) : (
              <></>
            )}

            <input
              {...register("price")}
              type="number"
              class="form-control"
              id="price"
              aria-describedby="emailHelp"
              placeholder="Product Price"
              name="price"
              onChange={handleChange}
            />
            {errors.price ? (
              <span style={{ color: "red" }}>{errors.price.message}</span>
            ) : (
              <></>
            )}

            <input
              {...register("image")}
              type="text"
              class="form-control"
              id="image"
              aria-describedby="emailHelp"
              placeholder="Product Image"
              name="image"
              onChange={handleChange}
            />
            {errors.image ? (
              <span style={{ color: "red" }}>{errors.image.message}</span>
            ) : (
              <></>
            )}
          </div>
          <button onClick={() => addData()} className="btn btn-success">
            Add Product
          </button>
        </form>
      </section>
    </>
  );
};

export default Add;
