import { SingleValue } from 'react-select';
import { SelectFieldOptions, BookingInfo } from '../../@types';

export const getAvailableDates = (
  obj: BookingInfo[] | any,
  event: SingleValue<SelectFieldOptions>
) => {
  return obj
    .find((item: any) => item.option.value === event?.value)
    .dates.map((item: any) => item.option);
};
