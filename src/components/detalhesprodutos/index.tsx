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
  
  interface DetalhesProdutosProps {
    open: boolean;
    setOpen: (open: boolean) => void;
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
            <Button className="bg-slate-600" onClick={() => setOpen(false)}>Continuar</Button>
            <DrawerClose>
         
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
  