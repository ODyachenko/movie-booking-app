import React, { FC } from 'react';

type TabsItemProps = {
  isActive: number;
  tab: string;
  index: number;
  setIsActive: any;
};

export const TabsItem: FC<TabsItemProps> = ({
  index,
  isActive,
  tab,
  setIsActive,
}) => {
  return (
    <li
      className={`main__tabs-item ${isActive === index ? 'active' : ''}`}
      onClick={() => setIsActive(index)}
    >
      <button>{tab}</button>
    </li>
  );
};
