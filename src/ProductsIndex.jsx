import { useState } from "react";

export function ProductsIndex({ products, images }) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(images);
  return (
    <div>
      <h1>All products ({products.length} total)</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.images.url}</p>
          <p>price: {product.price}</p>
          <p>description: {product.description}</p>
        </div>
      ))}
      {images.map((image) => (
        <div key={image.id}>
          <p>h</p>
          <img src={image.url} alt="..." height="250px" width="250px" />
        </div>
      ))}
    </div>
  );
}
