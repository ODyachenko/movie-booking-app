import { FC } from 'react';
import { TabsItem } from './TabsItem';

const tabs: string[] = ['Now Showing', 'Upcoming'];

export const Tabs: FC = () => {
  return (
    <ul className="main__tabs">
      {tabs.map((tab, index) => (
        <TabsItem key={tab} tab={tab} index={index} />
      ))}
    </ul>
  );
};
