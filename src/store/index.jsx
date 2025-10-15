import toast from 'react-hot-toast';
import { create } from 'zustand';

export const domain = 'http://82.112.241.233:2000';

export const activeCard = create((set) => ({
  activeUrl: undefined,
  setActiveUrl: (newUrl) => set(() => ({ activeUrl: newUrl })),
}));

export const cart = create((set) => ({
  value: [],
  addToCart: (product) => {
    // push
    set((state) => {
      toast.success('Product Added To Cart !');
      let arrayOfCart = [...state.value];
      let index = arrayOfCart.findIndex((el, index) => {
        return el.documentId == product.documentId;
      });
      if (index == -1) {
        arrayOfCart.push({ ...product, qty: 1 });
        return { value: arrayOfCart };
      } else {
        arrayOfCart[index].qty++;
        return { value: arrayOfCart };
      }
    });
  },
}));

// find , findIndex
