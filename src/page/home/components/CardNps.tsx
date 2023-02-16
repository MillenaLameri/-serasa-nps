import React, { useState } from "react";
import { Button, Card, CardContent, Rating, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Colors } from "../../../util/colors";
import Text from "../../../util/customText/Text";
import { BoxCentralizado } from "../../../util/BoxCentralizado";
import { Banner } from "./Logo";
import { Loading } from "../../../util/Loading";

export const CardNps = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;
  return (
    <Box display="flex" p={3} sx={{ margin: "auto", maxWidth: "100%" }}>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 6,
          }}
        >
          <BoxCentralizado>
            <Box alignItems="center" textAlign="center">
              <Banner />
              <Box maxWidth="25rem">
                <Text variant="headingSm" color="magenta">
                  Conte o quanto você está satisfeito com nossos serviços
                </Text>
              </Box>
              <Text variant="headingSm">Marque de 1 à 5</Text>
              <Rating
                size="large"
                sx={{
                  fontSize: "3rem",
                }}
              />
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
