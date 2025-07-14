import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const fetchTasksFromAPI = async (setTasks, headers) => {
  try {
    const res = await axios.get("https://taskmanager-8nh7.onrender.com/api/tasks", headers);
    setTasks(res.data);
  } catch (err) {
    toast.error("Failed to load tasks");
  }
};

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const headers = useMemo(() => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
}), [token]);


  useEffect(() => {
    if (!token) {
      toast.error("Please login first");
      navigate("/login");
    } else {
      fetchTasksFromAPI(setTasks, headers);
    }
  }, [navigate, token, headers]); // include dependencies safely

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post("https://taskmanager-8nh7.onrender.com/api/tasks", { title }, headers);
      setTitle("");
      fetchTasksFromAPI(setTasks, headers);
      toast.success("Task added!");
    } catch (err) {
      toast.error("Failed to add task");
    }
  };

  const toggleComplete = async (task) => {
    try {
      await axios.put(
        `https://taskmanager-8nh7.onrender.com/api/tasks/${task._id}`,
        { completed: !task.completed },
        headers
      );
      fetchTasksFromAPI(setTasks, headers);
    } catch (err) {
      toast.error("Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://taskmanager-8nh7.onrender.com/api/tasks/${id}`, headers);
      fetchTasksFromAPI(setTasks, headers);
      toast.success("Task deleted!");
    } catch (err) {
      toast.error("Failed to delete task");
    }
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
      return new Date(a.createdAt) - new Date(b.createdAt);
    });

  return (
    <motion.div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-purple-700">📝 Your Task Board</h1>

      <form onSubmit={addTask} className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-grow px-4 py-2 border-2 border-purple-300 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button className="bg-purple-600 text-white px-6 py-2 rounded-r hover:bg-purple-700 transition">
          Add
        </button>
      </form>

      <div className="flex justify-between items-center mb-4 text-sm text-gray-700">
        <div>
          <label className="mr-2 font-semibold">Filter:</label>
          <select
            className="border border-purple-300 px-2 py-1 rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        <div>
          <label className="mr-2 font-semibold">Sort:</label>
          <select
            className="border border-purple-300 px-2 py-1 rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      <ul className="space-y-3">
        {filteredTasks.map((task) => (
          <motion.li
            key={task._id}
            className={`flex justify-between items-center p-3 rounded-xl shadow-md transition-all duration-300 ${
              task.completed ? "bg-green-100 line-through" : "bg-purple-50"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <span
              className="cursor-pointer text-lg"
              onClick={() => toggleComplete(task)}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task._id)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ✖
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
