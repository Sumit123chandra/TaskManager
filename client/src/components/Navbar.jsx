import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-2xl font-bold tracking-wide">🌟 TaskManager</Link>
      <div className="space-x-4">
         <Link to="/" className="hover:underline text-white">Home</Link>
        {!token ? (
          <>
            <Link to="/login" className="hover:underline text-white">Login</Link>
            <Link to="/register" className="hover:underline text-white">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:underline text-white">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="bg-white text-purple-700 font-semibold px-3 py-1 rounded hover:bg-purple-200 transition duration-200"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
