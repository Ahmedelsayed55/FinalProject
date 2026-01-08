import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const favorites = create(
  persist(
    (set) => ({
      favoritesItem: [],
      addToFavorites: (product) =>
        set((state) => {
          let favoritesItem = state.favoritesItem;
          let final = favoritesItem.findIndex(
            (el) => el.documentId == product.documentId
          );
          if (final != -1) {
            toast.error(`${product.name} is already added to favorites`);
          } else {
            favoritesItem.push({ ...product, qty: 1 });
            toast.success(`${product.name} added to favorites`);
          }
          return { favoritesItem: favoritesItem };
        }),
      removeItemFromFavorites: (product) =>
        set((state) => {
          let favorites = state.favoritesItem;
          let final = favorites.findIndex(
            (el) => el.documentId == product.documentId
          );
          favorites.splice(final, 1);
          toast.success(`${product.name} deleted from favorites`);
          return { favoritesItem: favorites };
        }),
    }),
    {
      name: "favorites",
    }
  )
);
