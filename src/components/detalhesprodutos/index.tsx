import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
  } from "@/components/ui/drawer";
  import { Button } from "../ui/button";
import { ReactNode } from "react";
  
  interface DetalhesProdutosProps {
    open: boolean | any;
    setOpen: (open: boolean) => void;
    children?: ReactNode
  }
  
  export default function DetalhesProdutos({ open, setOpen }: DetalhesProdutosProps) {
    return (
      <Drawer open={open} onOpenChange={setOpen} >
        <DrawerContent className="h-[90%]" >
          <DrawerHeader>
            <DrawerTitle>PRODUTO</DrawerTitle>
            <DrawerDescription>hamburger novo</DrawerDescription>
          </DrawerHeader>




          <DrawerFooter>
            <Button className="bg-orange-500" onClick={() => setOpen(false)}>Continuar</Button>
            <DrawerClose>
         
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
  