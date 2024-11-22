import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Download } from "lucide-react"
import { Button } from "../ui/button"

  

export default function Importar(){

    return (
        <div>
            <Dialog>
            <DialogTrigger>Importar</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Importação em massa</DialogTitle>
                <DialogDescription className="w-full flex items-center gap-2">
                    <a 
                    className="flex items-center gap-2 border-b-2"
                    href="https://waysac.sysprov.com.br/validamatriz/controllers/uploaded_files/matriz_example.xlsx" download="example_matriz.xlsx">
                     Baixar modelo <Download />
                     </a>
                </DialogDescription>
                </DialogHeader>
                
                <div className="py-4 px-4 border border-chart-4 rounded">
                    <input type="file" />
                </div>

                <DialogFooter>
                    <Button>Importar</Button>
                    <Button variant="outline">Cancelar</Button>
                </DialogFooter>
            </DialogContent>
            </Dialog>

        </div>
    )
}