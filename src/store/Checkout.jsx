import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCheckoutStore = create(
  persist(
    (set) => ({
      checkoutItems: [],
      total: 0,
      clearCheckout: () => set({ checkoutItems: [], total: 0 }),
      addToCheckout: (product) =>
        set((state) => {
          let products = [...state.checkoutItems];
          const productIndex = products.findIndex((i) => i.id === product.id);
          if (productIndex !== -1) {
            products[productIndex].qty += 1;
            toast.success(
              `${product.name} Quantity Changed to :` + products[productIndex].qty,
            );
          } else {
            products.push({ ...product, qty: product.qty ? product.qty : 1 });
            toast.success(`${product.name} added to cart`);
          }
          return {
            checkoutItems: products,
            total: products.reduce((sum, item) => sum + item.price * item.qty, 0),
          };
        }),
      incrementQty: (product) =>
        set((state) => {
          let products = [...state.checkoutItems];
          let productIndex = products.findIndex((i) => i.id === product.id);
          products[productIndex].qty += 1;
          toast.success(
            `${products[productIndex].name} Quantity Changed to :` +
              products[productIndex].qty,
          );
          return {
            checkoutItems: products,
            total: products.reduce((sum, item) => sum + item.price * item.qty, 0),
          };
        }),
      decrementQty: (product) =>
        set((state) => {
          let products = [...state.checkoutItems];
          let productIndex = products.findIndex((i) => i.id === product.id);
          if (products[productIndex].qty > 1) {
            products[productIndex].qty -= 1;
            toast.success(
              `${products[productIndex].name} Quantity Changed to :` +
                products[productIndex].qty,
            );
          } else {
            products.splice(productIndex, 1);
            toast.success(`${product.name} removed from cart`);
          }
          return {
            checkoutItems: products,
            total: products.reduce((sum, item) => sum + item.price * item.qty, 0),
          };
        }),
    }),
    {
      name: "checkout-storage",
    },
  ),
);
