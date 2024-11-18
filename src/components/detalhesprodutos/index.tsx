import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
 
    DrawerTitle,
  } from "@/components/ui/drawer";

import { ReactNode } from "react";
  
  interface DetalhesProdutosProps {
    open: boolean | any;
    setOpen: (open: boolean) => void;
    children?: ReactNode,
    data: any
  }
  import { Textarea } from "@/components/ui/textarea"

  export default function DetalhesProdutos({ open, setOpen, data }: DetalhesProdutosProps) {
    return (
      <Drawer open={open} onOpenChange={setOpen} >
        <DrawerContent className="h-[90%] flex flex-col" >
         

          <div className="p-2 flex flex-col mt-10">
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

           

           <div className="flex flex-col gap-2">
            <p>observação</p>
            <Textarea />

           </div>
           </div>
          </div>

          
         



          <DrawerFooter>
          
      
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
  