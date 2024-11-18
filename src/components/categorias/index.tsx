import { api } from "@/services/api";

export default function Categorias() {
  // Extrair categorias únicas da API
  const categoriasUnicas = api.reduce((acumulador: string[], item: any) => {
    if (!acumulador.includes(item.category)) {
      acumulador.push(item.category);
    }
    return acumulador;
  }, []);

  return (
    <div className="w-full mt-10 p-2 flex gap-2 overflow-auto">
      {categoriasUnicas.map((categoria, index) => (
        <div key={index} className="">
          {categoria}
        </div>
      ))}
    </div>
  );
}
