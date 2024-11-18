import Capa from "./components/capa";
import Categorias from "./components/categorias";
import Produtos from "./components/produtos";


function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      
    

      <Capa />

  
      <Categorias />

 
      <div className="mt-16 p-4 flex flex-col gap-4 overflow-y-auto">
        <Produtos />
      </div>
    </div>
  );
}

export default App;
