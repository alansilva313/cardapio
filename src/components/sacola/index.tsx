


import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

  



export default function Sacola(){

    return (
        <div className="w-full flex justify-between p-4 fixed bottom-0 z-10 bg-white shadow-lg shadow-black">

            <div>
              R$ 10,88
            </div>


          <Drawer>
            <DrawerTrigger className="bg-red-700 p-2 rounded text-white">Ver sacola</DrawerTrigger>
            <DrawerContent className="h-[90%]">
                <DrawerHeader>
                <DrawerTitle>
                    <div className="flex items-center justify-between">
                        <div>
                            fechar
                        </div>
                        <div>
                            sacola
                        </div>

                        <div>
                            limpar
                        </div>
                    </div>
                </DrawerTitle>
                <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
              
                </DrawerFooter>
            </DrawerContent>
            </Drawer>

        </div>
    )
}