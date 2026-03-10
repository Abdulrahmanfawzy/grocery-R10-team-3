import type { Product } from "../types/home.types";

/** Extract and clean the display name from product — API uses "title" not "name" */
export const getProductTitle = (p: Product): string => {
  let title = p.title || (p as any).name || "Product";
  // Fix common typos from the API
  return title.replace(/Choclate/gi, "Chocolate");
};

/** Extract price as a number — API returns price as a string */
export const getPrice = (val: any): number => {
  if (typeof val === "number") return val;
  const parsed = parseFloat(val);
  return isNaN(parsed) ? 0 : parsed;
};

/** Extract category name from product — API returns category as an object */
export const getProductCategory = (p: Product): string => {
  const cat = p.category;
  if (!cat) return "General";
  if (typeof cat === "string") return cat.trim();
  if (typeof cat === "object" && "name" in cat) return (cat as any).name?.trim() || "General";
  return "General";
};

/** Build a full image URL. Some products return a bare filename, others a full URL */
export const getImageUrl = (img?: string): string | undefined => {
  if (!img) return undefined;
  if (img.startsWith("http") || img.startsWith("/")) return img;
  return `https://grocery.newcinderella.online/storage/${img}`;
};
