import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const NETWORK_TIMEOUT = 15000;

export const axiosInstance = axios.create({
  timeout: NETWORK_TIMEOUT,
});

export const queryClient = new QueryClient({});
