import { useEffect, useState } from 'react';
import type { CatalogResponse, FurnitureFilterParams } from '../../types/catalogTypes';
import { useSearchParams } from 'react-router-dom';
import { catalogApi } from '../../features/catalog/catalogApi';
import toast from 'react-hot-toast';
import ProductCard from '../../components/ProductCard/ProductCard';

export const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [catalogData, setCatalogData] = useState<CatalogResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FurnitureFilterParams>({
    category: searchParams.get('category') || undefined,
    color: searchParams.get('color') || undefined,
    material: searchParams.get('material') || undefined,
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 0,
    size: 9,
  });

  const [localPrice, setLocalPrice] = useState({
    min: filters.minPrice || '',
    max: filters.maxPrice || '',
  });

  useEffect(() => {
    setLocalPrice({
      min: filters.minPrice || '',
      max: filters.maxPrice || '',
    });
  }, [filters.minPrice, filters.maxPrice]);

  const handleApplyPrices = () => {
    setFilters(prev => ({
      ...prev,
      minPrice: localPrice.min !== '' ? Number(localPrice.min) : undefined,
      maxPrice: localPrice.max !== '' ? Number(localPrice.max) : undefined,
      page: 0,
    }));
  };

  useEffect(() => {
    fetchCatalogData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const fetchCatalogData = async () => {
    try {
      setIsLoading(true);
      const data = await catalogApi.getFurniture(filters);
      setCatalogData(data);
    } catch (error) {
      console.error('Failed to fetch catalog:', error);
      toast.error('Failed to fetch catalog');
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilterChange = (key: keyof FurnitureFilterParams, value: any) => {
    const newFilters = { ...filters, [key]: value, page: 0 };
    setFilters(newFilters);
    updateSearchParams(newFilters);
  };

  const handlePageChange = (newPage: number) => {
    const newFilters = { ...filters, page: newPage };
    setFilters(newFilters);
    updateSearchParams(newFilters);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateSearchParams = (newFilters: FurnitureFilterParams) => {
    const params: Record<string, string> = {};
    if (newFilters.category) params.category = newFilters.category;
    if (newFilters.color) params.color = newFilters.color;
    if (newFilters.material) params.material = newFilters.material;
    if (newFilters.minPrice) params.minPrice = newFilters.minPrice.toString();
    if (newFilters.maxPrice) params.maxPrice = newFilters.maxPrice.toString();
    if (newFilters.page > 0) params.page = newFilters.page.toString();
    setSearchParams(params);
  };

  const clearFilters = () => {
    const resetFilters: FurnitureFilterParams = {
      page: 0,
      size: 9,
    };
    setFilters(resetFilters);
    setSearchParams({});
  };

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} додано до кошика!`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 font-family-sans">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Our catalog</h1>
          <p className="text-gray-600">{catalogData?.page.totalElements || 0} products found</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-black uppercase">CATEGORY</h2>
                <button
                  onClick={clearFilters}
                  className="text-base transition-all ease-in-out text-orange-600 hover:text-terracota font-medium cursor-pointer"
                >
                  Clear
                </button>
              </div>

              <div className="space-y-6">
                <select
                  id="category"
                  value={filters.category || ''}
                  onChange={e => handleFilterChange('category', e.target.value || undefined)}
                  className="w-full text-base bg-primary-20 rounded-[6px] font-bold p-2 text-black uppercase border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Furniture</option>
                  <option value="TABLES">TABLES</option>
                  <option value="CHAIRS">CHAIRS</option>
                  <option value="SOFAS">SOFAS</option>
                  <option value="BEDS">BEDS</option>
                  <option value="CABINETS">CABINETS</option>
                </select>
                <select
                  id="color"
                  value={filters.color || ''}
                  onChange={e => handleFilterChange('color', e.target.value || undefined)}
                  className="w-full text-base bg-primary-20 rounded-[6px] font-bold p-2 text-black uppercase border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Colors</option>
                  <option value="WHITE">WHITE</option>
                  <option value="BLACK">BLACK</option>
                  <option value="BROWN">BROWN</option>
                  <option value="GRAY">GRAY</option>
                  <option value="BEIGE">BEIGE</option>
                </select>
                <select
                  id="material"
                  value={filters.material || ''}
                  onChange={e => handleFilterChange('material', e.target.value || undefined)}
                  className="w-full text-base bg-primary-20 rounded-[6px] font-bold p-2 text-black uppercase border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Materials</option>
                  <option value="WOOD">WOOD</option>
                  <option value="METAL">METAL</option>
                  <option value="PLASTIC">PLASTIC</option>
                  <option value="FABRIC">FABRIC</option>
                  <option value="LEATHER">LEATHER</option>
                </select>

                <div>
                  <label className="block text-base bg-primary-20 rounded-[6px] font-bold p-2 text-black uppercase mb-2">
                    Price
                  </label>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={localPrice.min}
                        onChange={e => setLocalPrice({ ...localPrice, min: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={localPrice.max}
                        onChange={e => setLocalPrice({ ...localPrice, max: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <button
                      onClick={handleApplyPrices}
                      className="bg-terracota hover:bg-black text-white leading-4 font-semibold py-4 rounded-[50px] 
            transition duration-300 ease-in-out uppercase
            focus:outline-black focus:shadow-outline flex items-start justify-center gap-2"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {catalogData?.content && catalogData.content.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {catalogData.content.map(item => (
                    <ProductCard
                      key={item.id}
                      id={item.id.toString()}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={
                        item.imageUrls[0] ||
                        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80'
                      }
                      onAddToCart={() => handleAddToCart(item.name)}
                    />
                  ))}
                </div>

                {catalogData.page.totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => handlePageChange(filters.page - 1)}
                      disabled={filters.page === 0}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    {[...Array(catalogData.page.totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index)}
                        className={`px-4 py-2 rounded-lg transition ${
                          filters.page === index
                            ? 'bg-orange-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => handlePageChange(filters.page + 1)}
                      disabled={filters.page >= catalogData.page.totalPages - 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <svg
                  className="w-24 h-24 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try changing your search filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-terracota transition"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
