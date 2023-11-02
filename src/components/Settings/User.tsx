import React, { FC } from 'react';
import avatar from '../../assets/img/avatar.png';

export const User: FC = () => {
  return (
    <div className="settings__user user">
      <img className="user__avatar" src={avatar} alt="" />
      <div className="user__info">
        <h2 className="user__name">Miles Morales</h2>
      </div>
    </div>
  );
};
