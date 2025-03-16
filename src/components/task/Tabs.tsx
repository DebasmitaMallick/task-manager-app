import { useState } from "react";
import { Menu, LayoutGrid } from "lucide-react";
import List from "./components/list";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("list");

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex items-center space-x-8">
        {/* List Tab */}
        <button
          className={`flex items-center space-x-2 pb-1 ${
            activeTab === "list" ? "font-semibold border-b-2" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("list")}
        >
          <Menu size={20} />
          <span>List</span>
        </button>

        {/* Board Tab */}
        <button
          className={`flex items-center space-x-2 pb-1 ${
            activeTab === "board" ? "font-semibold border-b-2" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("board")}
        >
          <LayoutGrid size={20} />
          <span>Board</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "list" && <List />}
        {activeTab === "board" && <div>Board View Content</div>}
      </div>
    </div>
  );
};

export default Tabs;
