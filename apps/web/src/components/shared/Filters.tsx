'use client';

import { useMemo, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname } from '@/i18n/routing';
import { useRouter, useSearchParams } from 'next/navigation';
import { useProducts } from '@/contexts/ProductContext';
import Filter from '@/components/shared/Filter';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import '@/styles/styles.css';

const Filters = () => {
  const { products } = useProducts();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const absoluteMaxPrice = useMemo(() => {
    return Math.max(...products.map((car) => car.price ?? 0), 0);
  }, [products]);

  const [currentPrice, setCurrentPrice] = useState<string>(
    searchParams.get('maxPrice') || absoluteMaxPrice?.toString()
  );

  const categories = [...new Set(products.map((car) => car.category))];
  const capacity = [...new Set(products.map((car) => car.seats))];

  const categoryCount = useMemo(() => {
    return products.reduce(
      (acc, car) => {
        acc[car.category] = (acc[car.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
  }, [products]);

  const capacityCount = useMemo(() => {
    return products.reduce(
      (acc, car) => {
        acc[car.seats] = (acc[car.seats] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
  }, [products]);

  const toggleFilter = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const currentRawValue = params.get(name) || '';

    let currentValues = currentRawValue ? currentRawValue.split(',') : [];

    if (currentValues.includes(value)) {
      currentValues = currentValues.filter((v) => v !== value);
    } else {
      currentValues.push(value);
    }

    if (currentValues.length > 0) {
      params.set(name, currentValues.join(','));
    } else {
      params.delete(name);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const updatePrice = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== absoluteMaxPrice.toString()) {
      params.set('maxPrice', value);
    } else {
      params.delete('maxPrice');
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debouncedPriceUpdate = useDebouncedCallback((value) => {
    updatePrice(value);
  }, 500);

  return (
    <aside className="flex w-90 shrink-0 flex-col bg-white p-8">
      <div className="sticky top-25">
        <div className="flex flex-col gap-15">
          <Filter
            title="Type"
            options={categories.map((filter) => ({
              id: String(filter),
              label: String(filter),
              value: String(filter),
              results: categoryCount[filter as keyof typeof categoryCount] || 0,
            }))}
            selectedValues={(searchParams.get('type') || '').split(',')}
            onChange={(value) => toggleFilter('type', value)}
          />

          <Filter
            title="Capacity"
            options={capacity.map((seats) => ({
              id: `cap-${seats}`,
              label: `${seats} Person`,
              value: String(seats),
              results: capacityCount[seats as keyof typeof capacityCount] || 0,
            }))}
            selectedValues={(searchParams.get('capacity') || '').split(',')}
            onChange={(value) => toggleFilter('capacity', value)}
          />

          <div className="relative">
            <span className="text-secondary-300 mb-7 block text-xs font-semibold tracking-widest uppercase">Price</span>
            <RangeSlider
              className="single-thumb"
              max={absoluteMaxPrice}
              defaultValue={[0, Number(currentPrice)]}
              onInput={(val) => {
                setCurrentPrice(val[1].toString());
                debouncedPriceUpdate(val[1]);
              }}
            />
            <span className="text-secondary-400 block text-[20px] font-semibold">Max. ${currentPrice}.00</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
