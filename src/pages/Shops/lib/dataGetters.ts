import { getStores } from 'features/StoresList';
import { getStoresCategories } from 'features/StoresList/lib/dataGetters';

export async function getRegistryData() {
  const [stores, categories] = await Promise.all([
    getStores(),
    getStoresCategories()
  ]);
  return {
    stores,
    categories
  };
}
