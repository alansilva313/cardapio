import { api } from "@/services/api";
import { useEffect, useState } from "react";
import DetalhesProdutos from "../detalhesprodutos";
import hmbteste from "@/assets/hmbteste.jpg";

export default function Produtos() {
  const [produtosPorCategoria, setProdutosPorCategoria] = useState<{ [key: string]: any[] }>({});
  const [open, setOpen] = useState<any | void>(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<any | void>(null);

  useEffect(() => {
    // Simula a resposta da API para organizar os produtos por categoria
    const itensPorCategoria: any = api.reduce((ac: { [key: string]: any[] }, item: any) => {
      if (!ac[item.category]) {
        ac[item.category] = [];
      }
      ac[item.category].push(item);
      return ac;
    }, {});

    setProdutosPorCategoria(itensPorCategoria);
  }, []);

  const openModalDetalhes = (produto: any) => {
    setProdutoSelecionado(produto);
    setOpen(true);
  };

  const closeModalDetalhes = () => {
    setProdutoSelecionado(null);
    setOpen(false);
  };

  return (
    <div className="p-2">
      {Object.entries(produtosPorCategoria).map(([categoria, produtos], index) => (
        <div key={index} className="mb-6">
          <h2 className="font-bold capitalize mb-4 bg-slate-100 p-1">{categoria}</h2>
          <div className="flex flex-col gap-4">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="w-full flex justify-between items-center border-b pb-4 cursor-pointer"
                onClick={() => openModalDetalhes(produto)}
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{produto.title}</h3>
                  <p className="text-sm text-gray-600">{produto.ingredients}</p>
                  <p className="text-md  mt-2">
                    
                    <p>{produto.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}</p>
                  </p>
                </div>
                <div className="w-[100px] h-[80px] border rounded overflow-hidden">
                  <img
                    src={hmbteste || "/default.jpg"}
                    alt={produto.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      
      {produtoSelecionado && (
        <DetalhesProdutos open={open} data={produtoSelecionado} setOpen={closeModalDetalhes}>
          <div>
            <h3>{produtoSelecionado.title}</h3>
            <p>{produtoSelecionado.ingredients}</p>
            <p>
              {produtoSelecionado.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </DetalhesProdutos>
      )}
    </div>
  );
}
