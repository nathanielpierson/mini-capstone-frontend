export function TechProductsIndex({ tech_products }) {
  return (
    <div>
      <h1>All products ({products.length} total)</h1>
      {products.map((product) => (
        <div key={product.id}>
          { if (product.category) === 3 {
            <div>
            <h2>{product.name}</h2>
            <p>put image here</p>
            <p>price: {product.price}</p>
            <p>description: {product.description}</p>
            </div>
          }
          }
        </div>
      ))}
    </div>
  );
}
