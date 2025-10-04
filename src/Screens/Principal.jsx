import Cabecera from "../Components/Principal/Cabecera"
import Copy from "../Components/Principal/Copy"
import Chat from "../Components/Principal/Chat"


export function Principal(){
    return(
        <div className="flex flex-col min-h-screen w-screen bg-prymary">

            <Cabecera/>

            <div className="flex-1">
                <Chat/>
            </div>

            <Copy/>


        </div>

    )
}