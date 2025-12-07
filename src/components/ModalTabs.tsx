import { motion, AnimatePresence } from "framer-motion";
import type { ModalTabsProps } from "../types/modal";

export default function ModalTabs({
  tabs,
  activeTabId,
  setActiveTabId,
  closeTab,
}: ModalTabsProps) {
  return (
    <AnimatePresence>
      {tabs.length > 0 && (
        <motion.div
          className="modal fixed inset-0 flex justify-center items-start p-4 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="rounded-lg w-full max-w-3xl pointer-events-auto">
            {/* Tabs Header */}
            <div className="flex border-b border-gray-700">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    tab.id === activeTabId ? "border-b-2 border-blue-400" : ""
                  }`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <span>{tab.title}</span>
                  <button
                    className="ml-2 text-gray-400 hover:text-red-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeTab(tab.id);
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Active Tab Content */}
            <div className="p-4 text-white max-h-[60vh] overflow-auto">
              {tabs.find((t) => t.id === activeTabId)?.content}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
