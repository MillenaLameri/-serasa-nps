import * as Yup from "yup";

export type Nps = {
  name: string;
  comment?: string;
  rating: number;
};

export const NPS_DEFAULT: Nps = {
  name: "",
  comment: "",
  rating: 0,
};

export const NpsFormModelSchema: Yup.SchemaOf<Nps> = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome deve conter pelo menos 3 letras")
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
  comment: Yup.string().optional(),
  rating: Yup.number()
    .min(1, "Campo obrigatório")
    .required("Campo obrigatório"),
});
