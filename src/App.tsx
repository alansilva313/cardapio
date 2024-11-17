import { api } from "./services/api"
import image from "./assets/fdimage.jpg";

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

        
    <div className="w-full mt-10 p-2 flex gap-2 overflow-auto">
       <div>
         hamburger
       </div>
       <div>
         combo
       </div>

       <div>
         bebidas
       </div>
    </div>

      <div className="mt-12 p-2 flex flex-col gap-2 h-screen">
  

      

        {api.map((item, index) => (
          <div>
            <div key={index} className="w-full flex justify-between py-2 px-2 gap-2 ">
          <div>
            <h3>{item.title}</h3>
            <p>{item.ingredients}</p>
            <p className="font-bold mt-2">{item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"

            })}</p>
          </div>

          <div className="max-w-[120px] max-h-[80px]  border rounded overflow-hidden">
            <img src={image} alt="imagem" className="object-cover"/>
          </div>
          
        </div>

          
          <hr />
          </div>
        ))

        }
        
      </div>

   
   

    </div>
  )
}

export default App
