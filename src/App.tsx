import Categorias from "./components/categorias";
import Produtos from "./components/produtos";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import hbcapa from "./assets/capa_hb.jpg";

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Cabeçalho com background */}
      <div
        className="w-full h-[150px] relative flex items-center justify-between bg-cover bg-center"
        style={{ backgroundImage: `url(${hbcapa})` }}
      >
        <div className="w-full flex items-center justify-center">
          {/* Avatar */}
          <Avatar className="w-[95px] h-[95px] border bg-slate-100 flex items-center justify-center rounded-full top-24 absolute">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Categorias */}
      <Categorias />

      {/* Produtos */}
      <div className="mt-16 p-4 flex flex-col gap-4 overflow-y-auto">
        <Produtos />
      </div>
    </div>
  );
}

export default App;
