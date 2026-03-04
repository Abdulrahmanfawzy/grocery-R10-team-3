import styles from './DiscountBanner.module.css';
import ArrowIcon from '@/assets/icons/arrow-right.svg';

const DiscountBanner = () => {
    return (
        <div className="w-full h-[318px] bg-[#014162E5] rounded-[8px] relative overflow-hidden flex flex-col items-center justify-center text-white">

            <div className={`${styles.discountBanner} absolute inset-0 pointer-events-none`}></div>

            <div className="relative z-10 text-center mb-[24px]">
                <h2 className="text-[32px] font-normal leading-tight text-black">
                    Winter <span className="text-white">Discount</span>
                </h2>
                <p className="text-[20px]  mt-[8px] text-black">
                    Get 60% off - Limited Time Offer
                </p>
            </div>

            <div className="relative z-10 flex items-center gap-[16px] mb-[32px]">
                {[
                    { label: 'Days', value: '02' },
                    { label: 'Hours', value: '24' },
                    { label: 'Minutes', value: '59' },
                    { label: 'Seconds', value: '59' }
                ].map((item, index, array) => (
                    <div key={item.label} className="flex gap-[16px]">
                        <div className="flex flex-col items-center w-[80px]">
                            <div className="flex gap-[4px]">
                                {item.value.split('').map((char, i) => (
                                    <div key={i} className="w-[30px] h-[40px] bg-white rounded-[12px] flex items-center justify-center text-black text-[20px]">
                                        {char}
                                    </div>
                                ))}
                            </div>
                            <span className="text-[20px] mt-[8px]">{item.label}</span>
                        </div>
                        {index !== array.length - 1 && (
                            <span className="text-[20px] text-black">:</span>
                        )}
                    </div>
                ))}
            </div>

            <button className="relative z-10 bg-[#014162] hover:bg-[#002538] transition-colors py-[12px] px-[20px] rounded-[8px] flex items-center gap-[8px] group cursor-pointer">
                <span className="text-[16px]">Shop now</span>
                <img src={ArrowIcon} alt="Arrow icon" />
            </button>

        </div>
    );
};

export default DiscountBanner;