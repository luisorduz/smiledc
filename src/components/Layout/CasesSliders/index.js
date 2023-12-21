import { ImgComparisonSlider } from "@img-comparison-slider/react";
import styles from "./index.module.css";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const numeroCaso = [9, 11, 8, 6];

export const CasesSliders = ({
  background = "back",
  buttonredirect = true,
  title = true,
}) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const handleVerTodosLosCasos = () => {
    // Redirige al usuario a la página /successCases
    router.push("/SuccessCases/");
  };

  return (
    <div className={styles.bslider} style={{ background: background }}>
      {title && (
        <h1 className={styles.flexCasesSectionTitle}>
          {t("beforeAfterTitle")}
        </h1>
      )}
      <div className={styles.flexCasesSection}>
        {numeroCaso.map((caso, key) => (
          <div className={styles.gridItem} key={key}>
            <ImgComparisonSlider className={styles.containerSlider}>
              <div slot="first" className={`${styles.box} ${styles.before}`}>
                <Image
                  src={`/assets/${caso}.png`}
                  fill={true}
                  className={styles.image}
                  alt={t(`caseBeforeAlt`, { caso })}
                  sizes="(min-width: 576px) 100vw"
                />
                <figcaption>
                  <Typography className={styles.textLabelSlider}>
                    {t("beforeLabel")}
                  </Typography>
                </figcaption>
              </div>
              <div slot="second" className={`${styles.box} ${styles.after}`}>
                <Image
                  src={`/assets/${caso}-${caso}.png`}
                  fill={true}
                  className={styles.image}
                  alt={t(`caseAfterAlt`, { caso })}
                />
                <figcaption>
                  <Typography className={styles.textLabelSlider}>
                    {t("afterLabel")}
                  </Typography>
                </figcaption>
              </div>
              <svg slot="handle" xmlns="http://www.w3.org/2000/svg" width="80" viewBox="-8 -3 16 6">
                <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vectorEffect="non-scaling-stroke"></path>
              </svg>
            </ImgComparisonSlider>
          </div>
        ))}
      </div>
      {buttonredirect && (
        <Button
          size="large"
          className={styles.buttonCases}
          onClick={handleVerTodosLosCasos}
        >
          {" "}
          {t("viewAllCasesButton")}{" "}
        </Button>
      )}
    </div>
  );
};
