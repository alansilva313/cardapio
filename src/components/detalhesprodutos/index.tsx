import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
  } from "@/components/ui/drawer";

import { ReactNode } from "react";
  
  interface DetalhesProdutosProps {
    open: boolean | any;
    setOpen: (open: boolean) => void;
    children?: ReactNode,
    data: any
  }
  
  export default function DetalhesProdutos({ open, setOpen, data }: DetalhesProdutosProps) {
    return (
      <Drawer open={open} onOpenChange={setOpen} >
        <DrawerContent className="h-[90%] flex flex-col" >
          <DrawerHeader className="w-full flex flex-col mt-4">
            <DrawerTitle>{data.title}</DrawerTitle>
            <DrawerDescription>{data.ingredients}</DrawerDescription>
          </DrawerHeader>

          
         



          <DrawerFooter>
          
      
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
  