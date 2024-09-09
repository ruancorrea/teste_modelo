import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

interface HeaderProps {
}

export default function Header(props: HeaderProps) {
    let title = "MÉRCIA DA SAÚDE";
    let describe = "Com mais de 30 anos de experiência como técnica de enfermagem, dediquei minha vida a cuidar da saúde e bem-estar da nossa comunidade. Agora, estou pronta para levar esse compromisso ao próximo nível como candidata a Vereadora por Atalaia."

    return (
        <header className="flex flex-col-reverse lg:flex-row lg:justify-between ${styles.header}">
            {/*<InfoCard title={title} describe={describe}/>*/}
            <ImageCard path_image="/nome_numero.jpg" />
            <ImageCard path_image="/perfil_01.jpg" />
            <ImageCard path_image="/atalaia.jpg" />

        </header>
    );
}
