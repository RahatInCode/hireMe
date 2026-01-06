import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <div className="max-w-6xl mx-auto p-4">
        <Outlet />
      </div>
    </>
  );
}
