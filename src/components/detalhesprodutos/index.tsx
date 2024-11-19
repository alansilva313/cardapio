import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
 
    DrawerTitle,
  } from "@/components/ui/drawer";
  import hmbteste from "@/assets/hmbteste.jpg";

import { ReactNode } from "react";
  
  interface DetalhesProdutosProps {
    open: boolean | any;
    setOpen: (open: boolean) => void;
    children?: ReactNode,
    data: any
  }
  import { Textarea } from "@/components/ui/textarea"
import Cart from "../cart";

  export default function DetalhesProdutos({ open, setOpen, data }: DetalhesProdutosProps) {


    return (
      <Drawer open={open} onOpenChange={setOpen} >
        <DrawerContent className="h-[90%] flex flex-col" >
         

          <div className="p-2 flex flex-col mt-10 h-full overflow-auto pb-20">
           <div  className="flex flex-col gap-2">
           <DrawerTitle>{data.title}</DrawerTitle>
           <DrawerDescription>{data.ingredients}</DrawerDescription>

           <div>
            {data.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            }
           </div>


           <div >
            <p>adicionais</p>
             

           {data.adicionais.map((item: any) => (
             <div className="w-full flex justify-between mt-2">

             <div>
               <p>{item.title}</p>
               <p>{item.price.toLocaleString("pt-BR",  {
                  style: "currency",
                  currency: "BRL",

               })}</p>
             </div>
             <div className="flex items-center gap-2">
               <img src={hmbteste} alt="img" className="w-[55px] rounded"/>
               <input type="checkbox" />
             </div>

             </div>
           ))

           }

             <hr />
           </div>

           

           <div className="flex flex-col gap-2">
            <p>observação</p>
            <Textarea />

           </div>
           </div>
          </div>

          
         



          <DrawerFooter className="w-full fixed bottom-0">
          
           <Cart item={data}/>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
  