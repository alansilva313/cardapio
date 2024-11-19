import { useState } from "react";
import { Button } from "../ui/button";



export default function Cart({ item }: any){

    const [value, setValue] = useState(1);
    const [preco] = useState(item.price * value)


    return (
        <div className="flex gap-2">
            <input type="number" className="border w-full flex items-center justify-center text-center" 
            value={value}
            onChange={() => setValue(value+1)}
            
            />
            <Button className="w-[80%] flex justify-between bg-orange-600 hover:bg-orange-600"><p>adicionar</p> {preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })}</Button>
        </div>
    )
}