import { format } from 'date-fns';
import { CNB_DATE_FORMAT } from '../../../../../../../../networking/useExchangeRates/constants.ts';

const LAST_UPDATED_DATE_FORMAT = 'dd.MM.yyyy HH:mm';
const DATE_LOADING_INDICATOR = '...';

type ComposeExchangeRateDatesStringParams = {
  latestCnbRateEffectiveDate: Date | undefined;
  dataUpdatedAt: number;
};

export const composeExchangeRateDatesString = ({
  latestCnbRateEffectiveDate,
  dataUpdatedAt,
}: ComposeExchangeRateDatesStringParams): string => {
  const latestCnbRateEffectiveDateFormatted: string = latestCnbRateEffectiveDate
    ? format(latestCnbRateEffectiveDate, CNB_DATE_FORMAT)
    : DATE_LOADING_INDICATOR;

  const lastUpdatedDateFormatted: string = dataUpdatedAt
    ? format(dataUpdatedAt, LAST_UPDATED_DATE_FORMAT)
    : DATE_LOADING_INDICATOR;

  return `Effective: ${latestCnbRateEffectiveDateFormatted} | Updated: ${lastUpdatedDateFormatted}`;
};
