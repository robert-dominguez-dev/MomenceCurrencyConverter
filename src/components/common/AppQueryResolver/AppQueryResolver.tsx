import React, { ReactNode } from 'react';
import { AppScreenView } from '../AppScreenView.tsx';
import { checkShouldRenderContent } from './helpers/checkShouldRenderContent.ts';

type AppQueryResolverProps<TData> = {
  data: TData;
  isPending: boolean;
  error: Error | null;
  renderContent: (data: Exclude<TData, undefined | null>) => ReactNode;
};

export const AppQueryResolver = <TData,>({
  data,
  isPending,
  error,
  renderContent,
}: AppQueryResolverProps<TData>) => {
  if (isPending) {
    return <AppScreenView>Loading...</AppScreenView>;
  }

  if (error) {
    return <AppScreenView>{error.message}</AppScreenView>;
  }

  const shouldRenderContent = checkShouldRenderContent(data);

  if (shouldRenderContent) {
    return renderContent(data);
  }

  return <AppScreenView>No data...</AppScreenView>;
};
