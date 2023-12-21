// components/FlexHomeSection.js
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

import styles from "./index.module.css";
import { Suspense, useEffect } from "react";

export const FlexHomeSection = () => {
  const { t, i18n } = useTranslation(["common"]);

  const screenUpper576 = useMediaQuery("(min-width:576px)");

  const goToContact = () => {
    const target = document.getElementById("contactSection");
    const navbar = document.getElementById("navbar").offsetHeight;

    const targetOffset = target.offsetTop - navbar;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.flexHomeSection}>
      <h1 className={styles.flexHomeSectionTitle}>
        {t("flexHomeSection.title")}
      </h1>
      <div>
        <Typography className={styles.flexHomeSectionText}>
          {t("flexHomeSection.text")}
        </Typography>
      </div>
      <div className={styles.flexButtonHS}>
        <Button
          className={styles.buttonHomeSection}
          size={screenUpper576 ? "large" : "medium"}
          onClick={goToContact}
        >
          {" "}
          {t("flexHomeSection.buttonText")}{" "}
        </Button>
      </div>
    </div>
  );
};
