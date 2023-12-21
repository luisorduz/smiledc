import Image from "next/image";
import styles from "./Index.module.css";
import { Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className={styles.footer}>
      <Image
        src="/assets/footer.jpg"
        alt="Rectángulo negro con logo"
        fill={true}
        className={styles.imageFooter}
      />
      <div className={styles.flexFooter}>
        <Image
          src="/assets/logowhite.png"
          alt="SDC logo"
          width={100}
          height={100}
          layout="responsive"
          className={styles.image}
        />
        <div className={styles.boxRedes}>
          <Typography className={styles.textFooter}>
            {" "}
            {t("our_networks")}{" "}
          </Typography>
          <div className={styles.boxImage}>
            <a  href="https://instagram.com/smiledesignc?igshid=YzAwZjE1ZTI0Zg==" target="_blank">
            <Image
              src="/assets/ico-instagram.svg"
              alt="logo instagram"
              width={100}
              height={100}
              layout="responsive"
            />
            </a>
          </div>
          <div className={styles.boxImage}>
            <a  href="https://wa.link/152wbl" target="_blank">
            <Image
              src="/assets/ico-whatsapp.svg"
              alt="logo whatsapp "
              width={100}
              height={100}
              layout="responsive"
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
