import { useEffect, useState } from "react";
import { useWidth } from "../hooks/useWidth"
import { IconMenuHamburguer } from "./Icons";

interface ItemProps {
    nome: string
    destino: string
    className?: string
}

interface NavBarProps {
    className?: string
}


function Item(props: ItemProps) {
    return (
        <a className={`p-2 ${props.className}`} href={props.destino}>{props.nome}</a>
    )
}

function ItensNavbar(props: NavBarProps) {
    return (
        <div className="duration-1000 delay-1000 transition-transform">
            <Item className={props.className} nome={"Fale comigo"} destino={"/#falecomigo"}/>
        </div>
    )
}

export default function Navbar(props: NavBarProps) {
    const width = useWidth();
    const [ham, setHam] = useState(false);
    const [itensHam, setItensHam] = useState(false);

    useEffect(() => {
        if (width < 680) {
            setHam(true);
        }else {
            setHam(false);
            setItensHam(false);
        }
    }, [width])

    return (
        <div className={`fixed w-screen p-3`}>
            {ham ?
                <div className="flex justify-end">
                    <button onClick={() => setItensHam(!itensHam)} className="text-white mr-4">{IconMenuHamburguer} </button>  
                </div>
                :
                <div className="flex justify-end uppercase text-white font-bold">
                    <ItensNavbar />
                </div>
            }

            {itensHam ?
                
                <ItensNavbar className={"flex text-white font-bold"} />
                :
                <></>

            }
        </div>
    )
}