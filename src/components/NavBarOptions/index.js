import { useState } from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import styles from "./NavBarOptions.module.css";
import Image from "next/image";

export const NavBarOptions = ({
  changeLng,
  i18n,
  t,
  isSideBar = false,
  onMenuItemClick = () => {},
}) => {
  const screenUpper576 = useMediaQuery("(min-width:576px)");
  const [elementClasses, setElementClasses] = useState({
    home: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    proc: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    aboutUs: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    cases: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    moreCases: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
  });

  const goToContact = () => {
    const target = document.getElementById("contactSection");

    const targetOffset = target.offsetTop;
    onMenuItemClick(false);
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  const goToSection = (section, e) => {
    const updatedElementClasses = { ...elementClasses };

    
      updatedElementClasses[section].box = styles.boptionsClicked;
      updatedElementClasses[section].text = styles.textClicked;

      Object.keys(elementClasses).forEach((otherIdentifier) => {
        if (otherIdentifier !== section) {
          updatedElementClasses[otherIdentifier].box =
            styles.boptionsNotClicked;
          updatedElementClasses[otherIdentifier].text = styles.textNotClicked;
        }
      });
      setElementClasses(updatedElementClasses);
    
    const target = document.getElementById(e);
    const navbar = document.getElementById("navbar");
    onMenuItemClick(false);
    if (target && navbar) {
      const targetOffset = target.offsetTop;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={styles.foptions}
      style={{
        flexDirection: isSideBar ? "column" : "row",
      }}
    >
      {isSideBar && (
        <Image
          src="/assets/logowhite.png"
          alt={t("sdcLogo")}
          height={50}
          width={145}
          className={styles.logonavbar}
        />
      )}
      <div className={elementClasses.home.box}>
        <a
          href="/#homeSection"
          onClick={(e) => goToSection("home", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.home.text}>
            {t("home")}{" "}
          </Typography>
        </a>
      </div>
      <div className={elementClasses.proc.box}>
        <a
          href="/#procSection"
          onClick={(e) => goToSection("proc", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.proc.text}>
            {" "}
            {t("procedures")}{" "}
          </Typography>
        </a>
      </div>
      <div className={elementClasses.aboutUs.box}>
        <a
          href="/#auSection"
          onClick={(e) => goToSection("aboutUs", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.aboutUs.text}>
            {" "}
            {t("aboutUs2")}{" "}
          </Typography>
        </a>
      </div>
      <div className={elementClasses.cases.box}>
        <a
          href="/#casesSection"
          onClick={(e) => goToSection("cases", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.cases.text}>
            {" "}
            {t("beforeAfterNav")}{" "}
          </Typography>
        </a>
      </div>
      <div className={elementClasses.moreCases.box}>
        <a
          href="/SuccessCases"
          onClick={(e) => goToSection("", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.moreCases.text}>
            {" "}
            {t("successCases")}{" "}
          </Typography>
        </a>
      </div>
      <Button size={screenUpper576 ? "small" : "medium"} onClick={goToContact}>
        {" "}
        {t("Contacto")}{" "}
      </Button>
      {!isSideBar && (
        <div
          style={{
            color: "white",
            margin: "auto 10px",
            fontSize: "16px",
          }}
          onClick={() => {
            changeLng();
          }}
        >
          {i18n?.language?.toUpperCase()}
        </div>
      )}
    </div>
  );
};
