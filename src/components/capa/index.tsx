import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import hbcapa from "@/assets/capa_hb.jpg";

export default function Capa() {
    return (
        <div className="w-full h-96">
            {/* Capa com imagem */}
            <div
                className="w-full h-[180px] border bg-cover bg-center"
                style={{
                    backgroundImage: `url(${hbcapa})`,
                }}
            ></div>

            {/* Avatar e informações */}
            <div className="w-full flex items-center justify-center">
                <div className="w-[80%] flex items-center justify-center mt-2 border rounded flex-col relative">
                    <Avatar className="bottom-8 w-[75px] h-[75px]">
                        <AvatarImage />
                        <AvatarFallback>AL</AvatarFallback>
                    </Avatar>

                    <div className="top-11 absolute">
                        <h3 className="font-bold">Hamburgeria top bom</h3>
                    </div>

                    <div className="top-11 w-full border flex items-center justify-center">
                        <h3>aberto - seg a sáb</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
