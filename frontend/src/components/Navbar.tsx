import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-between p-4 border-b">
      <h1 className="font-bold text-xl">HireMe</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
