import Image from "next/image";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";

export const CardProcGrid = () => {
  const { t } = useTranslation("common");

  const goToCases = () => {
    const target = document.getElementById("casesSection");
    const navbar = document.getElementById("navbar").offsetHeight;

    const targetOffset = target.offsetTop - navbar;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  const procedureComponents = [
    {
      title: t("ceramicDesign"),
      description: t("ceramicDesignDescription"),
      icon: "diente-dorado",
    },
    {
      title: t("resinDesign"),
      description: t("resinDesignDescription"),
      icon: "diente-dorado",
    },
    {
      title: t("dentalCleaning"),
      description: t("dentalCleaningDescription"),
      icon: "herramientas",
    },
    {
      title: t("teethWhitening"),
      description: t("teethWhiteningDescription"),
      icon: "cepillo",
    },
  ];

  return (
    <div className={styles.flexProcSection}>
      <h1 className={styles.flexHomeSectionTitle}>{t("title")}</h1>
      <div className={styles.gridCardsProc}>
        {procedureComponents.map((component, key) => (
          <div className={styles.gridItem} key={key}>
            <div className={styles.cardProcSection}>
              <div className={styles.cardProcImage}>
                <Image
                  src={`/assets/ico-${component.icon}.svg`}
                  alt={t("iconAlt2")}
                  width={80}
                  height={80}
                />
              </div>
              <div className={styles.boxCardProcSection}>
                <h2 className={styles.headerCardProcSection}>
                  {component.title}
                </h2>
                <Typography className={styles.textCardProcSection}>
                  {component.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button size="large" className={styles.button} onClick={goToCases}>
        {t("learnMore2")}
      </Button>
    </div>
  );
};
