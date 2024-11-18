import Capa from "./components/capa";
import Categorias from "./components/categorias";
import Produtos from "./components/produtos";


function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      
      <Categorias />

      <Capa />

  
   

 
      <div className="mt-16 p-2 flex flex-col">
        <Produtos />
      </div>
    </div>
  );
}

export default App;
