import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Sacola() {
    const [isOpen, setIsOpen] = useState(false);

    // Função para alternar o estado do drawer
    const toggleDrawer = () => setIsOpen((prev) => !prev);

    return (
        <div className="w-full flex justify-between p-4 fixed bottom-0 z-10 bg-white shadow-lg shadow-black">
            <div>
                R$ 10,88
            </div>

            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                {/* Botão para abrir o drawer */}
                <DrawerTrigger asChild>
                    <button className="bg-red-700 p-2 rounded text-white" onClick={toggleDrawer}>
                        Ver sacola
                    </button>
                </DrawerTrigger>
                <DrawerContent className="h-[90%]">
                    <DrawerHeader>
                        <DrawerTitle>
                            <div className="flex items-center justify-between">
                                {/* Setinha para fechar o drawer */}
                                <button onClick={toggleDrawer} className="p-2">
                                    <ChevronDown />
                                </button>
                                <div>
                                    sacola
                                </div>
                                <div>
                                    <p className="text-[12px]">limpar</p>
                                </div>
                            </div>
                        </DrawerTitle>
                        <DrawerDescription></DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        {/* Adicione qualquer conteúdo para o rodapé aqui */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
