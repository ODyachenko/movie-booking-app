import React, { FC } from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { SelectFieldOptions } from '../../../@types';
import './styles.scss';

type SelectFieldProps = {
  options: SelectFieldOptions[];
  caption: string;
  errors: any;
  control: any;
};

export const SelectField: FC<SelectFieldProps> = ({
  options,
  caption,
  errors,
  control,
}) => {
  return (
    <label className="booking__field field">
      <span className="field__caption">{caption}</span>
      <Controller
        control={control}
        name={caption.toLowerCase()}
        rules={{ required: `Please select the ${caption}` }}
        render={({ field: { onChange, value, name, ref } }) => (
          <>
            <Select
              name={name}
              ref={ref}
              value={value}
              onChange={(e) => onChange(e)}
              className={`${errors[caption.toLowerCase()] ? 'error' : ''}`}
              classNamePrefix="field_select"
              options={options}
              placeholder={`Select a ${caption}`}
            />
            {errors[caption.toLowerCase()] && (
              <span className="field__error">
                {errors[caption.toLowerCase()].message}
              </span>
            )}
          </>
        )}
      />
    </label>
  );
};
