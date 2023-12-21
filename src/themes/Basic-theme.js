import { createTheme } from "@mui/material";

export const BasicTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "linear-gradient(rgba(215,173,92,255), rgba(233, 204, 154, 255))",
          color: "black",
          borderRadius: "30px",
          fontWeight: "bold",
          textTransform: "none",
          padding: "5px 20px",
          height: "40px",
          fontSize: "1rem",
          marginBottom: "40px",
          marginTop:"0px",
        },
        sizeSmall: {
          width: "130px",
          height: "30px",
          margin: "0px",
        },
        sizeMedium: {
          width: "170px",
          fontSize: "15px",
          margin: "0px",
        },
        sizeLarge: {
          width: "250px",
          height: "55px",
          fontSize: "1.2rem",
        }
      },
    },
  }
}
);
