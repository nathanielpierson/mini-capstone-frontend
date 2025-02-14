export function ProductsIndex({ products }) {
  return (
    <div>
      <h1>All produx ({products.length} total)</h1>
       {products.map((product) => (
         <div key={product.id}>
           <h2>{product.name}</h2>
           <p>price: {product.price}</p>
           <p>description: {product.description}</p>
           <p>supplier_id: {product.supplier_id}</p>
         </div>
       ))}
    </div>
  );
}