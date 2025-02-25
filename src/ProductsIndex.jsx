export function ProductsIndex({ products }) {
  return (
    <div>
      <h1>All produx ({products.length} total)</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>put image here</p>
          <p>price: {product.price}</p>
          <p>description: {product.description}</p>
        </div>
      ))}
    </div>
  );
}
