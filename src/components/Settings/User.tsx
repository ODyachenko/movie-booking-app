import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import defaultAvatar from '../../assets/img/avatar_private.png';

export const User: FC = () => {
  const { authUser } = useAppSelector((state) => state.user);

  return (
    <div className="settings__user user">
      <img
        className="user__avatar"
        src={authUser ? authUser.avatarUrl : defaultAvatar}
        alt={authUser.fullname}
      />
      <div className="user__info">
        <h2 className="user__name">{authUser.fullname}</h2>
        <span className="user__email">{authUser.email}</span>
      </div>
    </div>
  );
};
