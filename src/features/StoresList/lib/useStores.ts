import { useCallback, useEffect, useState } from 'react';
import { getStores } from './dataGetters';
import StoreModel from './StoreModel';

interface IUseStoresResult {
  isLoading: boolean;
  stores: StoreModel[];
  hasMore: boolean;
  getNextStoresPage: () => void;
  error?: Error;
}

const useStores = (page: number = 1): IUseStoresResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [stores, setStores] = useState<StoreModel[]>([]);
  const [error, setError] = useState();
  const [hasMore, setHasMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    getStores(currentPage, { signal: controller.signal })
      .then((result) => {
        if (controller.signal.aborted) {
          return;
        }
        setHasMore(!!result.length);
        setStores((prev) => [
          ...prev,
          ...result.map((data) => new StoreModel(data))
        ]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
    return () => controller.abort();
  }, [currentPage])

  const getNextStoresPage = useCallback(() => setCurrentPage((prev) => prev + 1), [])

  return {
    isLoading,
    stores,
    error,
    hasMore,
    getNextStoresPage
  };
} 

export default useStores;
