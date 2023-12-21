import { ContactForm } from "../EmailForm";
import styles from "./Index.module.css";

import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { CardProcGrid } from "../Layout/CardProcGrid";
import { CardAboutUsFlex } from "../Layout/CardAboutUsFlex";
import { CasesSliders } from "../Layout/CasesSliders";
import { FlexHomeSection } from "../Layout/FlexHomeSection";

export const MainPage = () => {
  const screenUpper576 = useMediaQuery("(min-width:576px)");

  return (
    <>
      <Box id="homeSection" className={styles.bsection}>
        <Image
          src={
            screenUpper576
              ? "/assets/Enmascarar_grupo_7.jpg"
              : "/assets/Enmascarar_grupo_73.jpg"
          } // Ruta relativa a la imagen dentro de la carpeta public
          alt="Mujer sonriendo"
          width={100} // Ancho de la imagen en píxeles
          height={100} // Alto de la imagen en píxeles
          layout="responsive"
          className={styles.image}
        />
        <FlexHomeSection />
      </Box>
      <div id="procSection" className={styles.bsectionCases}>
        <CardProcGrid />
      </div>
      <div id="auSection" className={styles.bsectionCases2}>
        <Image
          src={"/assets/fondo-au.jpg"}
          alt="Fondo section"
          fill={true}
          className={styles.fondoAboutUs}
        />
        <CardAboutUsFlex />
      </div>
      <div id="casesSection" className={styles.bsection}>
        <CasesSliders />
      </div>
      <div id="contactSection" className={styles.bsectionContact}>
        <Image
          src={
            screenUpper576
              ? "/assets/Enmascarar_grupo_10.jpg"
              : "/assets/Enmascarar_grupo_15.jpg"
          } // Ruta relativa a la imagen dentro de la carpeta public
          alt="Mujer sonriendo"
          width={100} // Ancho de la imagen en píxeles
          height={100} // Alto de la imagen en píxeles
          layout="responsive"
          className={styles.image}
        />
        <ContactForm />
      </div>
    </>
  );
};
