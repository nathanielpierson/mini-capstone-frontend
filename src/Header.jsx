import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <div>
      <Link to="/signup">Signup</Link>
      <br></br>
      <br></br>
      <Link to="/login">Login</Link>
    </div>
  );
}
