import Image from 'next/image';
import styles from './style.module.css'

export default function ImageCard() {
  return (
    <div className={styles.imgContainer} >
        <Image
            src="/image.jpeg" 
            alt="Descrição da imagem"
            layout='fill'
        />
    </div>

  );
}