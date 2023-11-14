import { SingleValue } from 'react-select';
import { BookingInfo, SelectFieldOptions } from '../../@types';

export const getAvailableTime = (
  obj: BookingInfo | any,
  event: SingleValue<SelectFieldOptions>,
  cinema?: string
) => {
  const res = obj
    .find((item: any) => item.option.value === cinema)
    .dates.find((item: any) => item.option.value === event?.value);

  return res.time.map((item: any) => item.option);
};
