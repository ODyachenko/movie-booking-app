import { SingleValue } from 'react-select';
import { BookingInfo, SelectFieldOptions } from '../../@types';

export const getAvailableDates = (
  obj: any,
  event: SingleValue<SelectFieldOptions>
) => {
  return obj
    .find((item: any) => item.option.value === event?.value)
    .dates.map((item: any) => item.option);
};
