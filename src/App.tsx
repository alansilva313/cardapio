import Categorias from "./components/categorias";
import Produtos from "./components/produtos";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import hbcapa from "./assets/capa_hb.jpg";

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      
      <div
        className="w-full h-[150px] relative flex items-center justify-between bg-cover bg-center"
        style={{ backgroundImage: `url(${hbcapa})` }}
      >
        <div className="w-full flex items-center justify-center">
         
          <Avatar className="w-[95px] h-[95px] border bg-slate-100 flex items-center justify-center rounded-full top-24 absolute">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          
        </div>
      <div>
        
      </div>
        
      </div>

     <div className="p-2 absolute">
     <p className="text-white shadow-xl">seg - sab - 18:00</p>
     </div>

      <div className="w-full flex items-center justify-center z-10 mt-8 bg-white p-2 flex-col  rounded">
      <h3 className="text-[18px] font-bold text-slate-400">Hamburgeria</h3>
       
      </div>


  
      <Categorias />

 
      <div className="mt-16 p-4 flex flex-col gap-4 overflow-y-auto">
        <Produtos />
      </div>
    </div>
  );
}

export default App;
