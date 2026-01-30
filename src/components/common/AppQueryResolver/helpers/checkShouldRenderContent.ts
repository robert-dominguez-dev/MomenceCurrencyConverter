import isEmpty from 'lodash/isEmpty';
import isFinite from 'lodash/isFinite';

export const checkShouldRenderContent = <TData>(
  data: TData,
): data is Exclude<TData, null | undefined> => {
  const hasNoData = data === undefined || data === null;

  if (hasNoData) {
    return false;
  }

  const isDataValidNumber = isFinite(data);
  return isDataValidNumber || !isEmpty(data);
};
