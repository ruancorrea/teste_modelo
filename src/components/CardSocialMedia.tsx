import React, { useState, useEffect, ReactNode } from "react";

import { 
    IconFacebook,
    IconInstagram,
    IconTikTok,
    IconXTwitter,
    IconYouTube,
    Hospital,
    IconHands,
    IconFoguete,
    IconKey,
} from "./Icons";

interface CardSocialMediaProps {
    icon: string
    name: string
    link: string
}

export default function CardSocialMedia (props: CardSocialMediaProps){
    const [iconApplication, setIconApplication] = useState<ReactNode>(null);

    useEffect(() => {
        // Lógica para definir o ícone com base em props.icon
        switch (props.icon) {
            case 'Facebook':
                setIconApplication(IconFacebook);
                break;
            case 'Youtube':
                setIconApplication(IconYouTube);
                break;
            case 'Instagram':
                setIconApplication(IconInstagram);
                break;
            case 'TikTok':
                setIconApplication(IconTikTok);
                break;
            case 'X':
                setIconApplication(IconXTwitter);
                break;
            case 'Hospital':
                setIconApplication(Hospital);
                break;
            case 'ApertoMaos':
                setIconApplication(IconHands);
                break;
            case 'Foguete':
                setIconApplication(IconFoguete);
                break;
            case 'Chave':
                setIconApplication(IconKey);
                break;
            default:
                setIconApplication(null); 
        }
    }, [props.icon]); 
    
    return (
        <a href={props.link} className="card bg-pink-200 rounded-lg p-5 shadow-md mt-50">
             <div className="flex justify-center">
                <div className="rounded-full p-2">
                    {iconApplication} 
                </div>
            </div>
            <div className="flex justify-center items-center mb-4">
                <div>
                    <p className="font-medium text-gray-900">
                        {props.name}
                    </p>
                </div>
            </div>
        </a>
    )
}