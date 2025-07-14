import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-gradient-to-tr from-white to-blue-50 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        className="text-center py-20 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-800 leading-tight mb-4">
          Organize Your Day <br /> with TaskManager
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A smart, simple, and beautiful way to manage your daily tasks — anytime, anywhere.
        </p>
        <div className="space-x-4">
          <Link to="/register">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-400 transition">
              Login
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 px-8 pb-20 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {[
          {
            title: "Simple UI",
            desc: "Clean and distraction-free design so you can focus on what matters.",
          },
          {
            title: "Task Management",
            desc: "Create, complete, and delete tasks — effortlessly.",
          },
          {
            title: "Accessible Everywhere",
            desc: "Use on mobile or desktop. Your tasks, always with you.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="bg-black text-center py-6 text-sm text-gray-100 border-t">
        All Rights Reserved © {new Date().getFullYear()} TaskManager • Sumit Chandra
      </footer>
    </div>
  );
}
