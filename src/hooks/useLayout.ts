import { LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { useMemo, useState } from 'react';

export const useLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle | undefined>(undefined);

  const handleLayout = (event: LayoutChangeEvent) =>
    setLayout(event.nativeEvent.layout);

  return useMemo(() => ({ handleLayout, layout }), [layout]);
};
