import React from "react";
import { ErrorMessage } from "formik";
import "./Index.css";

interface MensagemErroProps {
  name: string;
}

export const MensagemErro: React.FC<MensagemErroProps> = (props) => {
  return (
    <ErrorMessage
      component="div"
      className="validation-error-message"
      name={props.name}
    />
  );
};

export default MensagemErro;
