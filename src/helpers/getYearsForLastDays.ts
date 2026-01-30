import { differenceInCalendarYears } from 'date-fns';
import { getDateBeforeDays } from './getDateBeforeDays.ts';

export const getYearsForLastDays = (
  days: number,
  now = new Date(),
): number[] => {
  const start = getDateBeforeDays(days, now);
  const yearsDiff = differenceInCalendarYears(now, start);
  const years = yearsDiff + 1;
  return Array.from({ length: years }, (_, i) => start.getFullYear() + i);
};
