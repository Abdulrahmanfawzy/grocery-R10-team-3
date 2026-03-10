// import ProductCard from '../../common/ProductCard'; 

import ProductCard from "@/components/common/productCard/ProductCard";
import PeachImg from '@/assets/images/products/peach.png';
import PinappleImg from '@/assets/images/products/pinapple.png';
import RambutanImg from '@/assets/images/products/rambutan.png';
import GreenAppleImg from '@/assets/images/products/green-apple.png';
import KiwiImg from '@/assets/images/products/kiwi.png';    

const ProductGrid = () => {



    const products = [
        {
            id: 1,
            name: "Peach",
            price: 32.08,
            oldPrice: 35,
            image: PeachImg,
            rating: 3.8,
            badges: ["In Stock", "Save 20%", "New"],
        },
        {
            id: 2,
            name: "Pinapple",
            price: 60.8,
            oldPrice: 65,
            image: PinappleImg,
            rating: 4.5,
            badges: ["In Stock", "Save 20%", "New"],
        },
        {
            id: 3,
            name: "Rambutan",
            price: 70.8,
            oldPrice: 80,
            image: RambutanImg,
            rating: 4.2,
            badges: ["In Stock", "Save 20%", "New"],
        },
        {
            id: 4,
            name: "Green Apple",
            price: 45.78,
            oldPrice: 50,
            image: GreenAppleImg,
            rating: 4.0,
            badges: ["In Stock", "Save 20%", "New"],
        },
        {
            id: 5,
            name: "Kiwi",
            price: 50.8,
            oldPrice: 55,
            image: KiwiImg,
            rating: 4.8,
            badges: ["In Stock", "Save 20%", "New"],
        }
    ];
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;