import './App.css'
import { ProductsPage } from './ProductsPage'
import { SignupPage } from './SignupPage'
import { LoginPage } from './LoginPage'
import { LogoutLink } from './LogoutLink'

function App() {
  console.log("hello");
return (
<div>
  <ProductsPage />
  <SignupPage />
  <LoginPage />
  <LogoutLink />
</div>
)

}

export default App;