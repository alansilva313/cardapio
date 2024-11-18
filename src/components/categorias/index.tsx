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
    <div className={`hidden w-full mt-14 p-2  gap-2 overflow-auto bg-red-300`}>
      {categoriasUnicas.map((categoria, index) => (
        <div key={index} className="">
          {categoria}
        </div>
      ))}
    </div>
  );
}
