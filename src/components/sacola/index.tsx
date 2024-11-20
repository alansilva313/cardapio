


import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "../ui/button"
  



export default function Sacola(){

    return (
        <div className="w-full flex justify-between p-4 fixed bottom-0 z-10 bg-white shadow-lg shadow-black">

            <div>
              R$ 10,88
            </div>


          <Drawer>
            <DrawerTrigger className="bg-red-700 p-2 rounded text-white">Ver sacola</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>

        </div>
    )
}