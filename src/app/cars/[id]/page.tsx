import products from "@/data/products.json";
import { notFound } from "next/navigation";

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const car = products.find((p) => p.productid === id);

    if (!car) {
        notFound();
    }

    return (
        <main className="flex flex-col gap-8 p-8">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                    <img src={car.imgSrc} alt={car.title} className="w-full rounded-lg" />
                </div>

                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-secondary-500">{car.title}</h1>
                    <p className="text-secondary-300 mt-2">{car.category}</p>
                    <div className="mt-8">
                        <span className="text-2xl font-bold">${car.price ?? 0}/day</span>
                    </div>
                    <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
                        Rent Now
                    </button>
                </div>
            </div>
        </main>
    );
}
