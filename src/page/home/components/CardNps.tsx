import { Button, Card, CardContent, Rating, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Colors } from "../../../util/colors";
import Text from "../../../util/customText/Text";
import { BoxCentralizado } from "../../../util/BoxCentralizado";
import { Banner } from "./Logo";

export const CardNps = () => {
  return (
    <Box display="flex" p={3} sx={{ margin: "auto", maxWidth: "100%" }}>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <BoxCentralizado>
            <Box alignItems="center" textAlign="center">
              <Banner />
              <Text variant="headingSm" color="magenta">
                Conte o quanto você está satisfeito com nossos serviços
              </Text>
              <Text variant="headingSm">Marque de 1 à 5</Text>
              <Rating size="large" />
            </Box>
          </BoxCentralizado>
          <Text variant="headingXs">Nome</Text>
          <TextField></TextField>
          <Text variant="headingXs">Comentario (Opcional)</Text>
          <TextField></TextField>
          <Box mt={6}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: 10,
                backgroundColor: Colors.magenta,
                "&:hover": {
                  backgroundColor: Colors.magenta,
                  boxShadow: "none",
                },
              }}
            >
              <Text color="lighthigh" variant="subheading">
                Enviar avaliação
              </Text>
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
