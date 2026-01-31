import React, { memo, useMemo } from 'react';
import {
  CnbCurrencyEntry,
  CnbExchangeRatesInfo,
} from '../../../../../../networking/useExchangeRates/types.ts';
import { CurrencySelectItem } from './CurrencySelectItem.tsx';
import { CnbCurrencyCode } from '../../../../../../networking/useExchangeRates/constants.ts';
import { FlatList, ListRenderItem } from 'react-native';
import { AppDivider } from '../../../../../common/AppDivider.tsx';
import { Control, useWatch } from 'react-hook-form';
import {
  ConverterFieldName,
  ConverterFormValues,
} from '../../TabsNavigator/screens/ConverterScreen/types.ts';

const keyExtractor = (item: CnbCurrencyEntry) => item.currencyCode;

type CurrencySelectItemListProps = Pick<CnbExchangeRatesInfo, 'entries'> & {
  control: Control<ConverterFormValues>;
  onSelect: (currencyCode: CnbCurrencyCode) => void;
};

const _CurrencySelectItemList = ({
  control,
  entries,
  onSelect,
}: CurrencySelectItemListProps) => {
  const fromCurrency = useWatch({
    name: ConverterFieldName.fromCurrency,
    control,
  });

  const toCurrency = useWatch({
    name: ConverterFieldName.toCurrency,
    control,
  });

  const excludedCurrencies = new Set<CnbCurrencyCode>([
    fromCurrency,
    toCurrency,
  ]);

  const entriesFiltered = useMemo(
    () => entries.filter(entry => !excludedCurrencies.has(entry.currencyCode)),
    [entries, fromCurrency, toCurrency],
  );

  const renderItem: ListRenderItem<CnbCurrencyEntry> = ({ item }) => (
    <CurrencySelectItem
      key={item.currencyCode}
      {...item}
      onPress={onSelect}
    />
  );

  return (
    <FlatList
      data={entriesFiltered}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={AppDivider}
    />
  );
};

export const CurrencySelectItemList = memo(_CurrencySelectItemList);
