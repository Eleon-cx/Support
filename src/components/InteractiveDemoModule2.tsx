"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Layers, Clock, Users, CheckSquare, PlusCircle } from "lucide-react"

const initialTasks = [
  { id: 1, name: "Update FAQs", owner: "Alice", deadline: "2023-06-15", status: "In Progress" },
  { id: 2, name: "Train support team", owner: "Bob", deadline: "2023-06-20", status: "Not Started" },
  { id: 3, name: "Set up new ticketing system", owner: "Charlie", deadline: "2023-06-18", status: "In Progress" },
]

export default function InteractiveDemo() {
  const [tasks, setTasks] = useState(initialTasks)
  const [newTask, setNewTask] = useState({ name: "", owner: "", deadline: "", status: "Not Started" })

  const addTask = () => {
    if (newTask.name && newTask.owner && newTask.deadline) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }])
      setNewTask({ name: "", owner: "", deadline: "", status: "Not Started" })
    }
  }

  const updateTaskStatus = (id: number, newStatus: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task)))
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-cyan-50 to-blue-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
        Interactive Support Readiness Tracker Demo
      </h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Add New Task</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Task Name"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Owner"
              value={newTask.owner}
              onChange={(e) => setNewTask({ ...newTask, owner: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="date"
              value={newTask.deadline}
              onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
              className="p-2 border rounded"
            />
            <motion.button
              onClick={addTask}
              className="bg-blue-500 text-white p-2 rounded flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlusCircle className="mr-2" size={20} />
              Add Task
            </motion.button>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Task List</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 text-left">
                    <Layers className="inline mr-2" size={16} /> Task
                  </th>
                  <th className="p-2 text-left">
                    <Users className="inline mr-2" size={16} /> Owner
                  </th>
                  <th className="p-2 text-left">
                    <Clock className="inline mr-2" size={16} /> Deadline
                  </th>
                  <th className="p-2 text-left">
                    <CheckSquare className="inline mr-2" size={16} /> Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b">
                    <td className="p-2">{task.name}</td>
                    <td className="p-2">{task.owner}</td>
                    <td className="p-2">{task.deadline}</td>
                    <td className="p-2">
                      <select
                        value={task.status}
                        onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                        className="p-1 border rounded"
                      >
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

