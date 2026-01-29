import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const CNB_RATES_URI =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

const NETWORK_TIMEOUT = 15000;

export const axiosInstance = axios.create({
  baseURL: CNB_RATES_URI,
  timeout: NETWORK_TIMEOUT,
});

export const queryClient = new QueryClient({});
