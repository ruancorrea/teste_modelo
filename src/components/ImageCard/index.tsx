
interface SectionProps {
  path_image: string;
  alt_text?: string; // Para permitir que o texto alternativo seja opcional
}

export default function ImageCard(props: SectionProps) {
  return (
    <div className="imgContainer">
      <img
        src={props.path_image}
        alt={props.alt_text || "Descrição da imagem"}
        className="image"
      />
    </div>
      
  );
}
