import axios from '@/configs/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface EndPointParams {
  url: string;
  method?: string;
  data?: unknown;
}

interface ResponseType {
  count: number;
  next: string;
  previous: string | null;
  results: unknown[];
}

interface ErrorResponseType {
  status: number;
  error: string;
}

export const requestHandler = async (
  params: EndPointParams
): Promise<ResponseType | ErrorResponseType> => {
  try {
    const response: AxiosResponse<ResponseType> = await axios(
      params as AxiosRequestConfig
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      status: error.response?.status || 500,
      error: error.message || 'Unknown Error'
    };
  }
};
