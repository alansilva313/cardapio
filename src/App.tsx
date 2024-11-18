
import Categorias from "./components/categorias";
import Produtos from "./components/produtos";

function App() {



  return (
    <div className="w-full h-screen">


      <div className="w-full h-[180px] bg-orange-400 relative flex items-center justify-between">
          
    
    <div className="w-full flex items-center justify-center">
    <div className="w-[95px] h-[95px] border bg-slate-100 flex items-center justify-center rounded-full top-32 absolute">
         <p className="text-2xl">AS</p>
      </div>
    </div>
      </div>

        
     <Categorias />

      <div className="mt-12 p-2 flex flex-col gap-2 h-screen">
  

      

       <Produtos />
        
      </div>

   
   

    </div>
  )
}

export default App
