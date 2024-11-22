import { LogOut } from "lucide-react";





export default function Header(){
    return (
        <div className="w-full h-16 bg-[#336b95] flex items-center px-4 justify-between">

            <div>
                <h3 className="text-white text-2xl">Valida matriz</h3>
            </div>

            <div className="flex items-center justify-between">
                <ul className="flex items-center justify-center gap-2 text-white">
                    <li className="cursor-pointer">inicio</li>
                    <li className="cursor-pointer">matrizes</li>
                </ul>
            </div>


            <div>
                <h3>
                    <LogOut className="text-white cursor-pointer"/>
                </h3>
            </div>

        </div>
    )
}