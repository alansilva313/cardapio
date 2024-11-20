import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import hbcapa from "@/assets/capa_hb.jpg";
import { Forward, Heart } from "lucide-react";


export default function Capa() {
    return (
        <div className="w-full">
            
          
            <div
                className="w-full h-[180px] border bg-cover bg-center"
                style={{
                    backgroundImage: `url(${hbcapa})`,
                }}
            >
                <div className="w-full flex items-end justify-end px-7 pt-2 gap-4">
                    <Heart className="text-white cursor-pointer " color="red"/>
                    <p className="text-white cursor-pointer"><Forward /></p>
                </div>


            </div>

            <div className="w-full flex items-center justify-center">
                <div className="w-[90%] flex items-center justify-center mt-2 border rounded flex-col relative">
                    <Avatar className="bottom-8 w-[75px] h-[75px]">
                        <AvatarImage />
                        <AvatarFallback>AL</AvatarFallback>
                    </Avatar>

                    <div className="top-11 absolute">
                        <h3 className="font-bold">Hamburgeria top bom</h3>
                    </div>

                    <div className="top-11 w-full border flex items-center bg-green-700 text-white justify-center  p-2 rounded">
                        <h3>fechado</h3>
           
                    </div>
                </div>
            </div>
        </div>
    );
}
