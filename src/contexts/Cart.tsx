import { createContext, ReactNode, useState } from "react";


interface CartContextType {
  cart: any[]; 
  addItem: (item: any) => void; 
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

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
