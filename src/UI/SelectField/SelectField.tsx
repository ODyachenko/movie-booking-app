import React, { FC } from 'react';
import Select from 'react-select';
import { SelectFieldOptions } from '../../../@types';
import './styles.scss';

type SelectFieldProps = {
  options: SelectFieldOptions[];
  caption: string;
};

export const SelectField: FC<SelectFieldProps> = ({ options, caption }) => {
  return (
    <label className="booking__field field">
      <span className="field__caption">{caption}</span>
      <Select
        classNamePrefix="field_select"
        options={options}
        placeholder={`Select a ${caption}`}
      />
    </label>
  );
};
