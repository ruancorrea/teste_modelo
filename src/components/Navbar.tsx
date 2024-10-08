import { useEffect, useState } from "react";
import { useWidth } from "../hooks/useWidth"
import { IconMenuHamburguer } from "./Icons";
import Image from 'next/image';

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
        <a className={`font-mono text-base font-semibold ${props.className} mr-4`} href={props.destino}>{props.nome}</a>
    )
}

function ItensNavbar(props: NavBarProps) {
    return (
        <div className="duration-1000 delay-1000 transition-transform px-2 ">
            <Item className={props.className} nome={"Sobre"} destino={"/#sobre"}/>
            <Item className={props.className} nome={"Projetos"} destino={"/#projetos"}/>
            <Item className={props.className} nome={"Contato"} destino={"/#contato"}/>
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
        <div className={`fixed w-screen p-3 top-0 border-b border-gray-200 bg-slate-50`}>
            {ham ?
                <div className="flex justify-between">
                    <Image src={'/nav.png'} alt="Descrição da imagem" width={30} height={1} />
                    <button onClick={() => setItensHam(!itensHam)} className="mr-4">{IconMenuHamburguer} </button>  
                </div>
                :
                <div className="flex justify-between uppercasefont-bold">
                    <Image src={'/nav.png'} alt="Descrição da imagem" width={30} height={1} />
                    <ItensNavbar />
                </div>
            }

            {itensHam ?
                <div className="flex justify-between uppercasefont-bold mt-3">
                    <ItensNavbar className={"flex font-bold"} />
                </div>
                :
                <></>

            }
        </div>
    )
}