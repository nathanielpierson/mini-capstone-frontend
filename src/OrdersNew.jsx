export function ordersNew( ) {

  const handleSubmit = (event) => {
    event.preventDefault();
     const form = event.target;
     const params = new FormData(form);
     const successCallback = () => form.reset();
     onCreate(params, successCallback);
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          user_id: <input name="user_id" type="text" />
        </div>
        <div>
          product_id: <input name="product_id" type="text" />
        </div>
        <div>
          quantity: <input name="quantity" type="text" />
        </div>
        <div>
          subtotal: <input name="subtotal" type="text" />
        </div>
        <div>
          tax: <input name="tax" type="text" />
        </div>
        <div>
          total: <input name="total" type="text" />
        </div>
        <button type="submit">Create</button>
        </form>
    </div>
  );
}