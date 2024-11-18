import { useEffect, useState } from "react";
import { api } from "@/services/api";

export default function Categorias() {
  const [isVisible, setIsVisible] = useState(false);

  // Extrair categorias únicas da API
  const categoriasUnicas = api.reduce((acumulador: string[], item: any) => {
    if (!acumulador.includes(item.category)) {
      acumulador.push(item.category);
    }
    return acumulador;
  }, []);

  // Monitorar rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      // Alterar visibilidade com base na rolagem
      setIsVisible(window.scrollY > 200); // Altere o valor "200" conforme necessário
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex w-full p-2 gap-2 overflow-auto bg-white top-0 fixed transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {categoriasUnicas.map((categoria, index) => (
        <div key={index} className="px-4 py-2 bg-gray-200 rounded">
          {categoria}
        </div>
      ))}
    </div>
  );
}
