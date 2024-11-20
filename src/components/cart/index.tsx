import { useState } from "react";
import { Button } from "../ui/button";

export default function Cart({ item }: any) {
    const [value, setValue] = useState(1);

    const preco = item.price * value;


    const increaseValue = () => setValue((prev) => prev + 1);
    const decreaseValue = () => {
        if (value > 1) {
            setValue((prev) => prev - 1);
        }
    };

    return (
        <div className="flex gap-2">
            <button 
                className="border px-3 py-1 bg-gray-200"
                onClick={decreaseValue}
            >
                -
            </button>
            <input 
                type="number"
                className="border  text-center flex items-center justify-center"
                value={value}
                readOnly
            />
            <button 
                className="border px-3 py-1 bg-gray-200"
                onClick={increaseValue}
            >
                +
            </button>
            <Button className="w-[80%] flex justify-between bg-orange-600 hover:bg-orange-700">
                <p>adicionar</p> 
                {preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })}
            </Button>
        </div>
    );
}
