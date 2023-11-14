import { SingleValue } from 'react-select';
import { SelectFieldOptions, BookingInfo } from '../../@types';

export const getAvailableSeats = (
  obj: BookingInfo[] | any,
  event: SingleValue<SelectFieldOptions>,
  cinema?: string,
  date?: string
) => {
  return obj
    .find((item: any) => item.option.value === cinema)
    .dates.find((item: any) => item.option.value === date)
    .time.find((item: any) => item.option.value === event?.value).seats;
};
