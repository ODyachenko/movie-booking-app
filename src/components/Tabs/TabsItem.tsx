import React, { FC } from 'react';

type TabsItemProps = {
  isActive: number;
  index: number;
  setIsActive: any;
};

export const TabsItem: FC<TabsItemProps> = ({
  index,
  isActive,
  setIsActive,
}) => {
  return (
    <li
      className={`main__tabs-item ${isActive === index ? 'active' : ''}`}
      onClick={() => setIsActive(index)}
    >
      <button>Now Showing</button>
    </li>
  );
};
