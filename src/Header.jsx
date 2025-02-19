import { Link } from "react-router-dom";

export function Header () {
  return (
  <div>
    <p>placeheader</p>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
  </div>
  )
}