import { useQuery } from '@tanstack/react-query';
import { homeApi } from '../lib/api/home.api';

export const useBestSells = () => {
  return useQuery({
    queryKey: ['bestSells'],
    queryFn: ({ signal }) => homeApi.getBestSells({ signal }),
  });
};

export const useHotDeals = () => {
  return useQuery({
    queryKey: ['hotDeals'],
    queryFn: ({ signal }) => homeApi.getHotDeals({ signal }),
  });
};

export const useNewProducts = () => {
  return useQuery({
    queryKey: ['newProducts'],
    queryFn: ({ signal }) => homeApi.getNewProducts({ signal }),
  });
};

export const useMoreToExplore = () => {
  return useQuery({
    queryKey: ['moreToExplore'],
    queryFn: ({ signal }) => homeApi.getMoreToExplore({ signal }),
  });
};
