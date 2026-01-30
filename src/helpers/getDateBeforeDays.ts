import { subDays } from 'date-fns';

export const getDateBeforeDays = (days: number, now = new Date()): Date =>
  subDays(now, days);
