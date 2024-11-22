
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "../ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "../ui/button"
  

export default function Individual(){

    return (
        <div>
           <Dialog>
            <DialogTrigger className="border p-2 rounded">Criar matriz</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>MATRIZ ÚNICA</DialogTitle>
                <DialogDescription>
                Crie uma unica matriz, perfeito para poucas importações no sistema!
                </DialogDescription>
                </DialogHeader>

               <div>
                <form className="flex flex-col gap-2">
                    <div className="form-control">
                        <Input placeholder="* Categoria 1"/>
                    </div>

                    <div className="form-control">
                        <Input placeholder="* Categoria 2"/>
                    </div>

                    <div className="form-control">
                        <Input placeholder="* Categoria 3"/>
                    </div>

                    <div className="form-control">
                        <Input placeholder="Categoria 4"/>
                    </div>

                    <div className="form-control">
                        <Input placeholder="Categoria 5"/>
                    </div>

                    <div className="form-control">
                        <Input placeholder="* Catalogo"/>
                    </div>

                    <div className="form-control">
                        <Input placeholder="* Tipo"/>
                    </div>

                    <div className="form-control">
                    <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione a empresa" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="WAY">WAY</SelectItem>
                        <SelectItem value="BW">BW</SelectItem>
                        <SelectItem value="GERAL">GERAL</SelectItem>
                    </SelectContent>
                    </Select>

                    </div>

                   
                </form>
               </div>

               <DialogFooter>
                <Button className="bg-blue-700 hover:bg-blue-800">Solicitar</Button>
                <Button variant="link">Cancelar</Button>
            </DialogFooter>
            </DialogContent>

          
            </Dialog>

        </div>
    )
}