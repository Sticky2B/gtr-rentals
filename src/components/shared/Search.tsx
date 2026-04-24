'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useProducts } from '@/context/ProductContext';
import Fuse from 'fuse.js';
import { SearchNormal1, Setting4 } from 'iconsax-reactjs';
import Image from 'next/image';
import Link from 'next/link';

const Search = () => {
  const { products } = useProducts();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFocused(false);
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const fusedItems = new Fuse(products, {
    keys: ['title'],
    includeScore: true,
    threshold: 0.4,
    ignoreDiacritics: true,
  });

  const searchResults = fusedItems.search(searchQuery).slice(0, 6);

  return (
    <div className="ml-16 w-123 max-w-1/2" ref={searchContainerRef}>
      <form
        className="relative flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          if (searchResults.length > 0) {
            window.location.href = `/cars/${searchResults[0].item.productid}`;
            setIsFocused(false);
          }
        }}
      >
        <button className="group absolute top-0 left-2.5 p-2.5" type="submit">
          <SearchNormal1
            className="transition-all group-hover:brightness-50"
            color="var(--color-secondary-400)"
            size={24}
          />
        </button>
        <input
          className="text-secondary-400 placeholder:text-secondary-400 hover:border-secondary-400 focus:border-secondary-400 h-11 w-full rounded-4xl border border-[#c3d4e9] bg-white/60 pr-12 pl-16 text-sm transition-all outline-none hover:shadow-sm focus:shadow-sm"
          type="text"
          name="search"
          value={searchQuery}
          onFocus={() => setIsFocused(true)}
          onClick={() => setIsFocused(true)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(e.target.value);
            if (!isFocused) setIsFocused(true);
          }}
          placeholder="Search for cars"
        />
        <button className="group absolute top-0 right-2.5 p-2.5" type="button">
          <Setting4 className="transition-all group-hover:brightness-50" color="var(--color-secondary-400)" size={24} />
        </button>
        {isFocused && searchQuery.length > 2 && (
          <div
            className={`absolute top-full left-0 mt-0.5 w-full rounded-xl border border-[#c3d4e9] bg-white px-4 py-2 shadow-md`}
          >
            {searchResults.length ? (
              <ul>
                {searchResults.map((car) => {
                  return (
                    <li key={car.item.productid} className="border-[#c3d4e9] not-last-of-type:border-b">
                      <Link
                        href={`/cars/${car.item.productid}`}
                        className="flex items-center gap-4 px-2 py-3 transition-opacity hover:opacity-75"
                        onClick={() => {
                          setIsFocused(false);
                          setSearchQuery('');
                        }}
                      >
                        <Image src={car.item.imgSrc || ''} width={72} height={32} alt="" loading="lazy" />
                        <span className="text-secondary-400 text-sm font-semibold">{car.item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <span className="text-md text-secondary-400 block p-2">No products found</span>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
