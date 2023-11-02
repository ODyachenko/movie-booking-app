import { ReactNode } from 'react';

export type BtnType = {
  className?: string;
  text: string;
  type: 'primary' | 'secondary';
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
  id: number;
  poster: ReactNode;
  name: string;
  rating: number;
}

export type SelectFieldOptions = {
  value: string;
  label: string;
};
