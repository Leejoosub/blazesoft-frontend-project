export const bookCategories = [
  "Action",
  "Horror",
  "Romance",
  "Comedy",
] as const;

export type BookCategories = (typeof bookCategories)[number];

export interface BookData {
  title: string;
  price: number;
  category: BookCategories;
  description: string;
}
