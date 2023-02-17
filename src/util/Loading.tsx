import { Backdrop, Box, CircularProgress } from "@mui/material";
import { BoxCentralizado } from "./BoxCentralizado";
import Text from "./customText/Text";

type Props = {
  open: boolean;
  close?: () => void;
};

export const Loading = ({ open, close }: Props) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <Box flexDirection="row">
        <Text variant="headingSm">Aguarde estamos processando</Text>
        <BoxCentralizado>
          <CircularProgress color="inherit" />
        </BoxCentralizado>
      </Box>
    </Backdrop>
  );
};
