import { Typography } from "@mui/material";
import styles from "./index.module.css";

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const NavbarSuccess = ({ changeLng }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation(["common"]);

  const redirectHome = () => {
    router.push("/");
  };

  return (
    <>
      <div
        className={styles.boptionsNotClicked}
        onClick={redirectHome}
        style={{ marginLeft: "auto" }}
      >
        <Typography className={styles.textNotClicked}>
          {t("backHome")}
        </Typography>
      </div>
      <div
        style={{
          color: "white",
          margin: "auto 20px",
          fontSize: "16px",
        }}
        onClick={() => {
          changeLng();
        }}
      >
        {i18n.language.toUpperCase()}
      </div>
    </>
  );
};
