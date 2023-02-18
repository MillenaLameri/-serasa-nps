import { Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";

import Text from "../../../util/customText/Text";
import { BoxCentralizado } from "../../../util/BoxCentralizado";
import { Banner } from "./Logo";

import { Form } from "./Form";

export const CardNps = () => {
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
                <Text variant="headingXs" color="magenta">
                  Conte o quanto você está satisfeito com nossos serviços
                </Text>
              </Box>
            </Box>
          </BoxCentralizado>
          <Form />
        </CardContent>
      </Card>
    </Box>
  );
};
