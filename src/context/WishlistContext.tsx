'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext<any>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
    const [wishlist, setWishlist] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('wishlist');
        if (saved) setWishlist(JSON.parse(saved));
    }, []);

    const toggleWishlist = (id: string) => {
        const newList = wishlist.includes(id)
            ? wishlist.filter(item => item !== id)
            : [...wishlist, id];

        setWishlist(newList);
        localStorage.setItem('wishlist', JSON.stringify(newList));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
