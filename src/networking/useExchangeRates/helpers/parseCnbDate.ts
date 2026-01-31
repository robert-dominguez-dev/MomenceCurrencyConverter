import { parse } from 'date-fns';
import { CNB_DATE_FORMAT } from '../constants.ts';

export const parseCnbDate = (dateString: string) =>
  parse(dateString, CNB_DATE_FORMAT, new Date());
