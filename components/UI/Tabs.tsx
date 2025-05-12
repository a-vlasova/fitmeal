'use client';

import { ReactNode, useState } from 'react';

const Tabs = ({
  tabTitles,
  tabContent,
}: {
  tabTitles: string[];
  tabContent: ReactNode[];
}) => {
  const [activeTab, setAcitveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setAcitveTab(index);
  };

  return (
    <div className="text-center">
      <div className="inline-flex max-w-full text-lg font-bold border-b border-black border-opacity-10 overflow-x-auto no-scrollbar">
        {tabTitles.map((title, index) => (
          <button
            onClick={() => handleTabClick(index)}
            key={title}
            className={`px-5 lg:px-10  pb-4 capitalize border-b-4 whitespace-nowrap transition ${
              index === activeTab ? 'border-fitmealGreen' : 'border-transparent'
            }`}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="">{tabContent[activeTab]}</div>
    </div>
  );
};

export default Tabs;
