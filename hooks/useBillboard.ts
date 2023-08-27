// hook en el que se llama a la función "useBillboard", con la que se revalida la información en el Billboard

import useSwr from 'swr'
import fetcher from '@/lib/fetcher';

const useBillboard = () => {
  const { data, error, isLoading } = useSwr('/api/random', fetcher, { 
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
   });
  return {
    data,
    error,
    isLoading
  }
};

export default useBillboard;