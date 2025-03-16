import { useState } from "react";
import { Calendar, Plus, MoreVertical, Edit, Trash2, GripVertical } from "lucide-react";

const TodoTable = () => {
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [optionsDropdown, setOptionsDropdown] = useState<number | null>(null);

  const tasks = [
    { id: 1, title: "Interview with Design Team", due: "Today", status: "TO-DO", category: "Work" },
    { id: 2, title: "Team Meeting", due: "30 Dec, 2024", status: "TO-DO", category: "Personal" },
    { id: 3, title: "Design a Dashboard page along with wireframes", due: "31 Dec, 2024", status: "TO-DO", category: "Work" },
  ];

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex justify-between bg-pink-200 p-4">
        <span>Todo (3)</span>
        <button className="flex items-center space-x-2">
          <Plus size={16} />
          <span>ADD TASK</span>
        </button>
      </div>

      {/* Add Task Row */}
      <div className="flex items-center p-4 space-x-4 border-b">
        <input placeholder="Task Title" className="border p-2 rounded-md flex-1" />
        <button className="flex items-center space-x-2 border p-2 rounded-md">
          <Calendar size={16} />
          <span>Add date</span>
        </button>

        <div className="relative">
          <button
            className="p-2 rounded-full border"
            onClick={() => setStatusDropdown(!statusDropdown)}
          >
            <Plus size={16} />
          </button>
          {statusDropdown && (
            <div className="absolute bg-pink-50 p-2 rounded-md shadow-md">
              {['TO-DO', 'IN-PROGRESS', 'COMPLETED'].map((status) => (
                <div key={status} className="p-1 cursor-pointer">{status}</div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="p-2 rounded-full border"
            onClick={() => setCategoryDropdown(!categoryDropdown)}
          >
            <Plus size={16} />
          </button>
          {categoryDropdown && (
            <div className="absolute bg-pink-50 p-2 rounded-md shadow-md">
              {['WORK', 'PERSONAL'].map((category) => (
                <div key={category} className="p-1 cursor-pointer">{category}</div>
              ))}
            </div>
          )}
        </div>

        <button className="bg-purple-700 text-white px-4 py-2 rounded-md">ADD ↩️</button>
        <button className="px-4 py-2 rounded-md">CANCEL</button>
      </div>

      {/* Task Rows */}
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center p-4 border-b">
          <GripVertical size={16} className="mr-4" />
          <input type="checkbox" className="mr-4" />
          <span className="flex-1">{task.title}</span>
          <span className="w-40">{task.due}</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-4">{task.status}</span>
          <span>{task.category}</span>

          <div className="relative">
            <button
              className="ml-4"
              onClick={() => setOptionsDropdown(task.id === optionsDropdown ? null : task.id)}
            >
              <MoreVertical size={16} />
            </button>

            {optionsDropdown === task.id && (
              <div className="absolute right-0 bg-pink-50 p-2 rounded-md shadow-md">
                <button className="flex items-center space-x-2 p-1">
                  <Edit size={16} /> <span>Edit</span>
                </button>
                <button className="flex items-center space-x-2 p-1 text-red-500">
                  <Trash2 size={16} /> <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoTable;
