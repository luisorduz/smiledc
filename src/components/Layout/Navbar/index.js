import { NavBarOptions } from "@/components/NavBarOptions";
import Image from "next/image";
import styles from "./Index.module.css";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { NavbarSuccess } from "../NavbarSuccess";
import Sidebar from "@/components/sideBar";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { t, i18n } = useTranslation(["common"]);
  const screenUpper900 = useMediaQuery("(max-width:900px)");

  let showOptions = false;
  const router = useRouter();

  const currentPath = router.asPath;

  if (currentPath === "/SuccessCases") {
    showOptions = true;
  }

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeLng = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={styles.navbar} id="navbar">
      <Image
        src="/assets/logowhite.png"
        alt={t("sdcLogo")}
        height={100}
        width={screenUpper900 ? 150 : 190}
        className={styles.logonavbar}
      />
      {!showOptions && (
        <div className={styles.menuContainer}>
          {/* Icono de menú que muestra/oculta el menú desplegable */}
          <div className={styles.menuIcon}>
            <div className={styles.menuIconContainer}>
              <IconButton onClick={toggleMenu}>
                <MenuIcon className={styles.materialIcon} />
              </IconButton>
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
                {i18n.language.toUpperCase()}
              </div>
            </div>

            <Sidebar isOpen={menuVisible} onMenuItemClick={setMenuVisible} />
          </div>

          {/* Menú desplegable */}
          <div className={styles.menuOptions}>
            <NavBarOptions changeLng={() => changeLng()} i18n={i18n} t={t} />
          </div>
        </div>
      )}
      {showOptions && <NavbarSuccess changeLng={changeLng} />}
    </div>
  );
};
