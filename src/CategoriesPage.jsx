export function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const handleIndex = () => {
    axios
      .get("http://localhost:3000/categories.json")
      .then(function (response) {
        setCategories(response.data);
      });
  };
  return (
    <div>
      <CategoriesIndex categories={categories} />
    </div>
  );
}
