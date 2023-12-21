import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button, Typography } from "@mui/material";
import styles from "./index.module.css";

const componentesCartaCase = [
  {
    title: "Durabilidad",
    content: "10 a 15 años"
  },
  {
    title: "Tiempo de tratamiento",
    content: "2 sesiones"
  },
  {
    title: "Procedimiento",
    content: "Limpieza dental, sin desgaste y sin dolor."
  }
]

export const PhotoSliderSection = ({ images, componentesCartas, contenidoCartas }) => {
  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.boxCarouselImage}
      >
        <Carousel useKeyboardArrows={true} showThumbs={false} showStatus={false}>
          {images.map((URL, index) => (
            <div key={index}>
              <img alt="sample_file" src={URL} className={styles.slideEje} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.headerTextContainer}>
          {componentesCartas.title}
        </h2>
        <Typography className={styles.textSuccessCasesSection}>
          {componentesCartas.description}
        </Typography>
        {
          contenidoCartas.map((contenido, index, index2) => {
            return (
              <>
                <h3 key={index} className={styles.h3SuccessCases}>
                  {contenido.title}
                </h3>
                <Typography key={index2} className={styles.textSuccessCasesSection}>
                  {contenido.content}
                </Typography>
              </>
            )
          })}
      </div>
    </div>
  );
};
