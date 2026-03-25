// Helper function test

export const calcDiscountedPrice = (
  price: string,
  discount: number,
): number => {
  if (discount <= 0) return parseFloat(price);
  const discountedPrice =
    parseFloat(price) - (parseFloat(price) * discount) / 100;
  return parseFloat(discountedPrice.toFixed(2));
};

export const roundRating = (rating: number): number => {
  return Math.round(rating * 2) / 2;
};
