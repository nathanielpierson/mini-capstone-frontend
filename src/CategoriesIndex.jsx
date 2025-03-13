export function CategoriesIndex({ categories }) {
  return (
    <div>
      <h1>All cats ({categories.length} total)</h1>
      {categorys.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <p>{category.images.url}</p>
          <p>price: {category.price}</p>
          <p>description: {category.description}</p>
        </div>
      ))}
    </div>
  );
}
