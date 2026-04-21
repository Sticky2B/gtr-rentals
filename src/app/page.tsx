import products from "@/data/products.json";
import HeroBanner from "@/app/components/HeroBanner";
import Booking from "@/app/components/Booking";
import ProductList from "@/app/components/ProductList";

// Regenerate random cars on every refresh
export const revalidate = 0;

export default function Home() {
    return (
        <main className="flex flex-col gap-8 p-8">
            <HeroBanner/>
            <Booking />
            <ProductList products={products} isFeatured={true} />
            <ProductList products={products} isRecommended={true} className="pb-8" />
        </main>
    );
}
