import Box from "@mui/material/Box";

import LogoSerasa from "../../../assents/svg/serasa-logo-full.svg";

export const Banner = () => {
  return (
    <Box alignItems="center" textAlign="center">
      <Box
        display={{
          xs: "none",
          sm: "none",
          md: "block",
          xl: "block",
        }}
      >
        <img
          src={LogoSerasa}
          alt="SerasaLogo"
          style={{ height: "10rem", width: "20rem" }}
        />
      </Box>
      <Box
        display={{
          xs: "block",
          sm: "block",
          md: "none",
          xl: "none",
        }}
      >
        <img
          src={LogoSerasa}
          alt="SerasaLogo"
          style={{ height: "5rem", width: "13rem" }}
        />
      </Box>
    </Box>
  );
};
