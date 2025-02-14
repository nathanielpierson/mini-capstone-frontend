//child of App.jsx
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { useState, useEffect } from "react";
import axios from "axios";

export function ProductsPage ( ) {
  const [products, setProducts] = useState([]);
       const handleIndex = () => {
      axios.get("http://localhost:3000/products.json")
      .then(function (response) {
        // handle success
        console.log('inside the .then')
        console.log(response.data);
        setProducts(response.data);
      })
      console.log('after the .then')   
    }

      const handleCreate = (params, successCallback) => {
        axios.post("http://localhost:3000/products.json", params).then((response) => {
          setProducts([...products, response.data]);
          successCallback();
        });
      };

      useEffect(handleIndex, [])
  return (
    <div>
        <p>test</p>
        <ProductsNew onCreate={handleCreate}/>
        <ProductsIndex products={products} />
    </div>
  )
}

