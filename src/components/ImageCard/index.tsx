import Image from 'next/image';
import styles from './style.module.css'

interface SectionProps {
  path_image: string,
}

export default function ImageCard(props: SectionProps) {
  return (
    <div className={styles.imgContainer} >
        <Image
            src={props.path_image}
            alt="Descrição da imagem"
            layout='fill'
        />
    </div>

  );
}