import React, { useState } from "react";
import { Button, Rating, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Colors } from "../../../util/colors";
import Text from "../../../util/customText/Text";
import { Loading } from "../../../util/Loading";
import { Nps, NpsFormModelSchema, NPS_DEFAULT } from "../../../models/Nps";
import { Formik } from "formik";
import MensagemErro from "../../../util/menssageError/MensagemErro";
import { useNpsService } from "../../../service/nps.service";

export const Form = () => {
  const [initialStatus, setInitialStatus] = useState<Nps>(NPS_DEFAULT);

  const [loading, setLoading] = useState(false);

  const { mockPostNps } = useNpsService();

  async function sendNps(values: Nps) {
    try {
      console.log(values);
      await NpsFormModelSchema.validate(values);
      setLoading(true);
      mockPostNps(values).finally(() => setLoading(false));
    } catch {}
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialStatus}
        validateOnBlur={true}
        validateOnChange={true}
        setValidation={true}
        validationSchema={NpsFormModelSchema}
        onSubmit={sendNps}
      >
        {(formProps) => {
          const { handleSubmit, handleChange } = formProps;
          return (
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <Box alignItems="center" textAlign="center">
                <Text variant="headingSm">Marque de 1 à 5</Text>
                <Rating
                  id="rating"
                  name="rating"
                  value={Number(formProps.values.rating)}
                  onChange={formProps.handleChange}
                  size="large"
                  sx={{
                    fontSize: "3rem",
                  }}
                />
                <MensagemErro name="rating" />
              </Box>
              <Text variant="headingXs">Nome</Text>
              <TextField
                id="name"
                name="name"
                value={formProps.values.name}
                onChange={formProps.handleChange}
                fullWidth
              />
              <MensagemErro name="name" />
              <Text variant="headingXs">Comentário (Opcional)</Text>
              <TextField
                fullWidth
                id="comment"
                name="comment"
                value={formProps.values.comment}
                onChange={formProps.handleChange}
              />
              <MensagemErro name="comment" />
              <Box mt={6}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  onClick={() => sendNps(formProps.values)}
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
            </form>
          );
        }}
      </Formik>
      <Loading open={loading} />
    </>
  );
};
