export type Tab = {
  id: string;
  title: string;
  content: React.ReactElement;
};

export type ModalTabsProps = {
  tabs: Tab[];
  activeTabId: string | null;
  setActiveTabId: (id: string) => void;
  closeTab: (id: string) => void;
};
