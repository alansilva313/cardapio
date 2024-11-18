import { api } from "@/services/api";
import { useEffect, useState } from "react";

export default function Produtos() {
  const [produtosPorCategoria, setProdutosPorCategoria] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
   
    const itensPorCategoria: any = api.reduce((ac: { [key: string]: any[] }, item: any) => {
      if (!ac[item.category]) {
        ac[item.category] = [];
      }
      ac[item.category].push(item);
      return ac;
    }, {});

    setProdutosPorCategoria(itensPorCategoria);
  }, []);

  return (
    <div className="p-4">
     
      {Object.entries(produtosPorCategoria).map(([categoria, produtos], index) => (
        <div key={index} className="mb-6">
      
          <h2 className=" font-bold capitalize mb-4">{categoria}</h2>
         
         
          <div className="flex flex-col gap-4">
            {produtos.map((produto) => (
              <div key={produto.id} className="w-full flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{produto.title}</h3>
                  <p className="text-sm text-gray-600">{produto.ingredients}</p>
                  <p className="text-md font-bold mt-2">
                    {produto.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <div className="w-[100px] h-[80px] border rounded overflow-hidden">
                  <img src={produto.image || "/default.jpg"} alt={produto.title} className="object-cover w-full h-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
