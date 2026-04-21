'use client';

import products from '@/data/products.json';
import { useMemo, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Checkbox from '@/app/ui/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import '@/app/ui/styles.css';

const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const absoluteMaxPrice = useMemo(() => {
    return Math.max(...products.map((car) => car.price), 0);
  }, []);
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
  }, []);

  const capacityCount = useMemo(() => {
    return products.reduce(
      (acc, car) => {
        acc[car.seats] = (acc[car.seats] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
  }, []);

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
          {/* TODO: create "Filter" component */}
          <div className="relative">
            <span className="text-secondary-300 mb-7 block text-xs font-semibold tracking-widest uppercase">Type</span>
            <div className="flex flex-col gap-8">
              {categories.map((filter) => (
                <Checkbox
                  key={filter}
                  id={filter}
                  label={filter}
                  results={categoryCount[filter] || 0}
                  checked={(searchParams.get('type') || '').split(',').includes(filter)}
                  onChange={() => toggleFilter('type', filter)}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <span className="text-secondary-300 mb-7 block text-xs font-semibold tracking-widest uppercase">
              Capacity
            </span>
            <div className="flex flex-col gap-8">
              {capacity.map((seats) => (
                <Checkbox
                  key={seats}
                  id={`cap-${seats}`}
                  label={`${seats} Person`}
                  results={capacityCount[seats] || 0}
                  checked={(searchParams.get('capacity') || '').split(',').includes(seats)}
                  onChange={() => toggleFilter('capacity', seats)}
                />
              ))}
            </div>
          </div>

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
