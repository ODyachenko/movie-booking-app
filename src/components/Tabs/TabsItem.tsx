import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setIsShowing } from '../../redux/slices/moviesSlice';

type TabsItemProps = {
  tab: string;
  index: number;
};

export const TabsItem: FC<TabsItemProps> = ({ index, tab }) => {
  const { isShowing } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  return (
    <li
      className={`main__tabs-item ${isShowing === index ? 'active' : ''}`}
      onClick={() => dispatch(setIsShowing(index))}
    >
      <button>{tab}</button>
    </li>
  );
};
