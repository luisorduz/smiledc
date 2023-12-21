import React from "react";
import styles from "./Sidebar.module.css"; // Ajusta la importación según tu estructura de archivos y estilos
import { useTranslation } from "react-i18next";
import { NavBarOptions } from "../NavBarOptions";

const Sidebar = ({ isOpen, onClose, handleClick, onMenuItemClick }) => {
  const sidebarClass = isOpen ? styles.sidebarOpen : styles.sidebarClosed;
  const { t, i18n } = useTranslation("common");

  return (
    <div className={`${styles.sidebar} ${sidebarClass}`}>
      <NavBarOptions
        t={t}
        i18n={i18n}
        isSideBar={true}
        onMenuItemClick={onMenuItemClick}
      />
    </div>
  );
};

export default Sidebar;
