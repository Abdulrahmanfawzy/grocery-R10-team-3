import styles from './PageBanner.module.css';

const PageBanner = () => {

    return (
        <section
            className={`relative w-full h-[300px] md:h-[575px] min-h-[575px] flex items-center ${styles.pageBanner}`}
        >
            <div className="absolute inset-0 bg-[#08415FC7]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between text-white gap-4">
                    <div>
                        <span className="text-[26px] font-bold tracking-widest uppercase mb-2 block text-white">
                            Welcome to our company
                        </span>
                        <h1 className="text-[60px] font-bold text-[#08ABFF] leading-tight">
                            Shop
                        </h1>
                    </div>
                    <div className="flex items-center space-x-2 text-sm pb-2">
                        <span className="hover:text-[#08ABFF]  text-[16px] cursor-pointer transition text-gray-200">Home</span>
                        <span className="text-[#08ABFF] font-bold text-[16px]"> {'>'} </span>
                        <span className="text-[#08ABFF] font-semibold text-[16px]">Shop</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageBanner;