import React from 'react';

import clsx from 'clsx';

import './button.scss';
import { IClassNameProp } from 'src/types';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, IClassNameProp {}

export const Button: React.FC<IButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={clsx(className, 'button')}>
      {children}
    </button>
  );
};
