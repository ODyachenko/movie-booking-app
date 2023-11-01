import { ReactNode } from 'react';

export type BtnType = {
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
