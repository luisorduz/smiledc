
import Image from "next/image"
import styles from "./index.module.css"


export const BotonFlotante = () => {
    return (
        <div className={styles.boxButton}>
                <a href="https://wa.link/152wbl" target="_blank">
                <Image
                    alt="Icono whatsapp"
                    src={"/assets/whatsapp.svg"}
                    width={100}
                    height={100}
                    layout="responsive"
                    className={styles.image}
                />
                </a>
        </div>
    )
}