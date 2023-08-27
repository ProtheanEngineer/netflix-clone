// hook que contiene la función de "UseCurrentUser", con la que obtiene información del usuario loggeado

import useSwr from 'swr'

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/current', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  }
};

export default useCurrentUser;