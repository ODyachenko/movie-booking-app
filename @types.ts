import { ReactNode } from 'react';

export type BtnType = {
  className?: string;
  text: string;
  loading?: boolean;
  type?: 'button' | 'submit';
  model: 'primary' | 'secondary';
  handler?: () => void;
};

export type FieldType = {
  text: string;
  type: 'text' | 'email' | 'password' | 'date' | 'time';
  handler?: () => void;
};

export type NavLinksType = {
  id: number;
  text: string;
  path: string;
  icon: ReactNode;
};

export interface ImoviesList {
  id: string;
  poster: string;
  actors: string[];
  synopsis: string;
  tags: string[];
  director: string;
  name: string;
  rating: number;
  type: string;
}

export type SelectFieldOptions = {
  value: string;
  label: string;
};

export type User = {
  fullname: string;
  avatarUrl: string;
  email: string;
};

export type BookingType = {
  cinema?: string;
  date?: string;
  time?: string;
  name?: string;
};

export type BookingInfo = {
  dates: [
    {
      option: SelectFieldOptions;
      time: [
        {
          seats: string[];
          option: SelectFieldOptions;
        }
      ];
    }
  ];
};

export type BookingItem = {
  option: SelectFieldOptions;
};
