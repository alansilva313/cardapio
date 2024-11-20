import { createContext, ReactNode, useState } from "react";


interface CartContextType {
  cart: any[]; 
  addItem: (item: any) => void; 
  clearCard: any
}


export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<any[]>([]); 

  const addItem = (item: any) => { 
    setCart((prevCart) => [...prevCart, item]);
  };


  const clearCard = () => {

  }
 
  return (
    <CartContext.Provider value={{ cart, addItem, clearCard }}>
      {children}
    </CartContext.Provider>
  );
}
