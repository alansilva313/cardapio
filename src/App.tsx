import Capa from "./components/capa";
import Categorias from "./components/categorias";
import Produtos from "./components/produtos";
import Sacola from "./components/sacola";


function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      
      <Categorias />

      <Capa />

  
   

 
      <div className="mt-16 p-2 flex flex-col">
        <Produtos />
      </div>

      <Sacola />
    </div>
  );
}

export default App;
