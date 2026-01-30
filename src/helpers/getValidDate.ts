import { isValid, parseISO } from 'date-fns';

export const getValidDate = (date: string | Date): Date | undefined => {
  const parsedDate = date instanceof Date ? date : parseISO(date);
  const isDateValid = isValid(parsedDate);
  return isDateValid ? parsedDate : undefined;
};
