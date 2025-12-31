import toast from "react-hot-toast";
import { create } from "zustand";

export const domain =
  window.location.hostname === "localhost"
    ? "http://localhost:1337"
    : "https://destiny-motor-generally-moms.trycloudflare.com";

export const cart = create((set) => ({
  cartItem: [
  ],
  total:0,
  addToCart: (product) =>
    set((state) => {
      let item =state.cartItem;
      let final = item.findIndex((el) => el.documentId === product.documentId);
      if (final != -1 ) {
          item[final].quantity += 1;
          toast.success(`${product.name} Quantity Changed to :` + item[final].quantity);
      }else{
        item.push({ ...product, quantity: 1 });
        toast.success(`${product.name} added to cart`);

      }
      // console.log(item);
      state.totalPriceInCart();
      return { cartItem: item };
    }),
    incrementQuantity: (product) => set((state)=>{
      let item =state.cartItem;
      let final = item.findIndex((el) => el.documentId == product.documentId);
      item[final].quantity += 1;
      state.totalPriceInCart();
      return { cartItem: item };
    }),
    decrementQuantity: (product) => set((state)=>{
      let item =state.cartItem;
      let final = item.findIndex((el) => el.documentId == product.documentId);
      if (item[final].quantity > 1) {
        item[final].quantity -= 1;
      }else{
        item.splice(final, 1);
        toast.success(product.name + " deleted from cart");
      }
      state.totalPriceInCart();
      return { cartItem: item };
    }),
    removeItem: (product)=> set((state)=>{
            let item =state.cartItem;
      let final = item.findIndex((el) => el.documentId == product.documentId);
      item.splice(final, 1);
     toast.success(product.name + " deleted from cart");
     state.totalPriceInCart();
      return { cartItem: item };
    }),
    totalPriceInCart: ()=> set((state)=>{
      let finalTotal = 0;
      state.cartItem.forEach((item)=>{
        finalTotal += item.price * item.quantity
      })
      return { total: finalTotal };
    })
}));
