import { Header } from "./Header";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { useState, useEffect } from "react";
import axios from "axios";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const handleIndex = () => {
    axios.get("http://localhost:3000/products.json").then(function (response) {
      setProducts(response.data);
    });
  };

  const handleIndex2 = () => {
    axios.get("http://localhost:3000/images.json").then(function (response) {
      setImages(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    axios
      .post("http://localhost:3000/products.json", params)
      .then((response) => {
        setProducts([...products, response.data]);
        successCallback();
      });
  };

  useEffect(handleIndex, []);
  useEffect(handleIndex2, []);

  return (
    <div>
      <p>test</p>
      <Header />,
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} images={images} />
    </div>
  );
}
