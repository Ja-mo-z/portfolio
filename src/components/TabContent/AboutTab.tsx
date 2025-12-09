import { useState } from "react";

export default function AboutTab() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["About", "Website"];

  return (
    <div className="flex flex-col gap-2">
      {/* Tabs */}
      <div className="flex gap-2 items-center justify-center">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-2 py-1 rounded-md border-3 bg-white ${
              activeTab === i
                ? "border-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                : "border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-2 p-2 border rounded-md">
        {activeTab === 0 && <div>Content for Tab 1</div>}
        {activeTab === 1 && <div>Content for Tab 2</div>}
      </div>
    </div>
  );
}
