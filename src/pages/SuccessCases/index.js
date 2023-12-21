import Image from "next/image";
import styles from "./index.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PhotoSliderSection } from "@/components/PhotoCarrusel";
import { Navbar } from "@/components/Layout/Navbar";
import { Typography, useMediaQuery } from "@mui/material";
import { Footer } from "@/components/Layout/Footer";
import { BotonFlotante } from "@/components/Layout/BotonFlotante";
import { useTranslation } from "react-i18next";
import NoSSR from "react-no-ssr";

const images = [
  [
    "/assets/cera-1.jpeg",
    "/assets/cera-2.jpeg",
    "/assets/cera-3.jpeg",
    "/assets/cera-4.jpeg",
    "/assets/cera-5.jpeg"
  ],
  [
    "/assets/resi-1.jpeg",
    "/assets/resi-2.jpeg",
    "/assets/resi-3.jpeg",
    "/assets/resi-4.jpeg",
    "/assets/resi-5.jpeg"
  ]
];



const SuccessCases = () => {
  const { t } = useTranslation("common");
  const screenUpper576 = useMediaQuery("max-width: 576px");

  const componentesCartas = [
    {
      title: t("Ceramic_Design"),
      description: t("ceramicDesignDescription3"),
    },
    {
      title: t("Resin_Design"),
      description: t("resinDesignDescription3"),
    },
  ];

  const contenidoCartas = [
    [
      {
        title: t("Durability"),
        content: t("years3"),
      },
      {
        title: t("Treatment_Time"),
        content: t("sessions3"),
      },
      {
        title: t("Procedure"),
        content: t("dentalCleaningWithoutWear"),
      },
    ],
    [
      {
        title: t("Durability"),
        content: t("years4"),
      },
      {
        title: t("Treatment_Time"),
        content: t("sessions4"),
      },
      {
        title: t("Procedure"),
        content: t("dentalCleaningWithoutWear"),
      },
    ],
  ];

  return (
    <>
      <NoSSR>
        <Navbar />
        <div className={styles.flexProcSection}>
          <h1 className={styles.flexHomeSectionTitle}>{t("title3")}</h1>
          <div className={styles.flexPhotoSlider}>
            <PhotoSliderSection
              images={images[0]}
              componentesCartas={componentesCartas[0]}
              contenidoCartas={contenidoCartas[0]}
            />
            <PhotoSliderSection
              images={images[1]}
              componentesCartas={componentesCartas[1]}
              contenidoCartas={contenidoCartas[1]}
            />
          </div>
          <div>
            <div className={styles.cardProcSection}>
              <Image
                src={"/assets/ico-personas.svg"}
                alt={t("iconAlt3")}
                width={screenUpper576 ? 40 : 80}
                height={screenUpper576 ? 40 : 80}
              />
              <div className={styles.boxCardProcSection}>
                <h2 className={styles.headerCardProcSection}>
                  {t("recommendations3")}
                </h2>
                <Typography className={styles.textCardProcSection}>
                  {t("recommendationsText3")}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      <BotonFlotante></BotonFlotante>
      <Footer/>
      </NoSSR>
    </>
  );
};

export default SuccessCases;
