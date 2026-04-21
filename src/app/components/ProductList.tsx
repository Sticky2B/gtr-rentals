import Link from "next/link";
import { Product } from "@/app/types/product";
import ProductCard from "@/app/components/ProductCard";

interface ProductListProps {
    products: Product[];
    isFeatured?: boolean,
    isRecommended?: boolean,
    className?: string,
}

const ProductList = ({
    products,
    isFeatured = false,
    isRecommended = false,
    className = ""
}: ProductListProps) => {
    if (!products || products.length === 0) {
        return <h2 className="text-4xl font-semibold">No products found.</h2>;
    }

    const CONFIG = {
        featured: {
            title: "Most Popular",
            showLink: true
        },
        recommended: {
            title: "Recommended cars",
            showLink: false
        }
    };

    const settings = isFeatured ? CONFIG.featured : isRecommended ? CONFIG.recommended : null;

    // "Most Popular" - 4 most expensive cars
    const mostPopular = [...products]
        .sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
        .slice(0, 4);

    // "Recommended" - Random 8 products
    const recommended = [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);

    const renderProducts = isFeatured ? mostPopular : isRecommended ? recommended : products;

    return (
        <div className={`w-full ${className}`}>
            {settings && (
                <div className="w-full flex justify-between items-center mb-5">
                    <h4 className="font-semibold text-base text-secondary-300 px-5 py-2.5">{settings.title}</h4>
                    {settings.showLink && (
                        <Link className="font-semibold text-base text-primary-500 px-5 py-2.5" href="/cars">View All</Link>
                    )}
                </div>
            )}
            <div className={`
                w-full grid grid-cols-1 gap-8
                ${(isFeatured || isRecommended) ?
                "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" :
                "lg:grid-cols-2 xl:grid-cols-3"
            }
            `}>
                {renderProducts.map((product) => (
                    <ProductCard
                        key={`prod-${product.productid}`}
                        productid={product.productid}
                        title={product.title}
                        category={product.category}
                        fuel={product.fuel}
                        transmission={product.transmission}
                        seats={product.seats}
                        price={product.price}
                        linkUrl={`/cars/${product.productid}`}
                        imgSrc={product.imgSrc}
                        imgWidth={product.imgWidth}
                        imgHeight={product.imgHeight}
                    />
                ))}
            </div>
        </div>
    )
};

export default ProductList;
