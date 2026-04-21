import products from '@/data/products.json';
import Booking from '@/app/components/Booking';
import Filters from '@/app/components/Filters';
import ProductList from '@/app/components/ProductList';

export default async function CarsListPage({
  searchParams,
}: {
  searchParams: Promise<{
    type?: string;
    capacity?: string;
    maxPrice?: string;
  }>;
}) {
  const params = await searchParams;

  const typeString = Array.isArray(params.type) ? params.type[0] : params.type;
  const selectedTypes = (typeString ?? '').split(',').filter(Boolean);

  const capacityString = Array.isArray(params.capacity) ? params.capacity[0] : params.capacity;
  const selectedCapacities = (capacityString ?? '').split(',').filter(Boolean);

  const maxPrice = Number(params.maxPrice) || Infinity;

  const filteredCars = products.filter((car) => {
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(car.category);
    const capacityMatch = selectedCapacities.length === 0 || selectedCapacities.includes(car.seats.toString());
    const priceMatch = car.price <= maxPrice;

    return typeMatch && capacityMatch && priceMatch;
  });

  return (
    <main className="flex">
      <Filters />
      <div className="flex w-full flex-col gap-8 p-8">
        <Booking />
        <ProductList products={filteredCars} />
      </div>
    </main>
  );
}
