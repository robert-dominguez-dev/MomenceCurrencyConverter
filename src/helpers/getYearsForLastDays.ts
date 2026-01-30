import { differenceInCalendarYears, subDays } from 'date-fns';

export const getYearsForLastDays = (
  days: number,
  now = new Date(),
): number[] => {
  const start = subDays(now, days);
  const yearsDiff = differenceInCalendarYears(now, start);
  const years = yearsDiff + 1;
  return Array.from({ length: years }, (_, i) => start.getFullYear() + i);
};
