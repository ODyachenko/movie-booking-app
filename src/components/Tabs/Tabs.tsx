import React, { FC, useState } from 'react';
import { TabsItem } from './TabsItem';

const tabs: string[] = ['Now Showing', 'Upcoming'];

export const Tabs: FC = () => {
  const [isActive, setIsActive] = useState<number>(0);

  return (
    <ul className="main__tabs">
      {tabs.map((tab, index) => (
        <TabsItem
          key={tab}
          tab={tab}
          index={index}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      ))}
    </ul>
  );
};
