import Image from "next/image";
import styles from "./index.module.css";
import { Typography, useMediaQuery, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export const CardAboutUsFlex = () => {
  const { t } = useTranslation("common"); // "common" es el nombre del namespace

  const goToContact = () => {
    const target = document.getElementById("contactSection");
    const navbar = document.getElementById("navbar").offsetHeight;

    const targetOffset = target.offsetTop - navbar;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  const screenUpper576 = useMediaQuery("(max-width:576px)");

  return (
    <div className={styles.flexAboutusSection}>
      <h1 className={styles.flexAboutusSectionTitle}>{t("aboutUs")}</h1>
      <div className={styles.flexAboutusCards}>
        <div className={styles.cardAboutusSection}>
          <Image
            src="/assets/ico-personas.svg"
            alt={t("iconAlt")}
            width={screenUpper576 ? 60 : 80}
            height={screenUpper576 ? 60 : 80}
          />
          <div className={styles.boxCardAboutusSection}>
            <h2 className={styles.headerCardAboutusSection}>
              {t("whatWeAre")}
            </h2>
            <Typography className={styles.textCardAboutusSection}>
              {t("whatWeAreDescription")}
            </Typography>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.cardAboutusSection}>
          <Image
            src="/assets/ico-doctor.svg"
            alt={t("iconAlt")}
            width={screenUpper576 ? 60 : 80}
            height={screenUpper576 ? 60 : 80}
          />
          <div className={styles.boxCardAboutusSection}>
            <h2 className={styles.headerCardAboutusSection}>
              {t("ourMission")}
            </h2>
            <Typography className={styles.textCardAboutusSection}>
              {t("ourMissionDescription")}
            </Typography>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.cardAboutusSection}>
          <Image
            src="/assets/ico-silla.svg"
            alt={t("iconAlt")}
            width={screenUpper576 ? 60 : 80}
            height={screenUpper576 ? 60 : 80}
          />
          <div className={styles.boxCardAboutusSection}>
            <h2 className={styles.headerCardAboutusSection}>
              {t("whereWeWantToGo")}
            </h2>
            <Typography className={styles.textCardAboutusSection}>
              {t("whereWeWantToGoDescription")}
            </Typography>
          </div>
        </div>
      </div>
      <Button size="large" className={styles.button} onClick={goToContact}>
        {t("learnMore")}
      </Button>
    </div>
  );
};
