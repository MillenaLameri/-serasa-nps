import { Box, CircularProgress } from "@mui/material";
import Text from "./customText/Text";

export const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "calc(100vh - 240px) !important",
      }}
    >
      <Text variant="headingSm" color="lighthigh">
        Aguarde estamos processando
      </Text>
      <CircularProgress size={100} color="secondary" />
    </Box>
  );
};
