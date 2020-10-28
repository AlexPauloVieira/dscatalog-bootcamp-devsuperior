import React from "react";
import { ReactComponent as ArrowIcon } from "core/assets/images/arrow.svg";
import "./styles.scss";

type Props = {
  text: string;
};

const FormButtonIcon = ({ text }: Props) => (
  <div className='d-inline-flex'>
    <button className='btn btn-primary form-btn-icon'>
      <h5>{text}</h5>
    </button>
    <div className='form-btn-icon-content'>
      <ArrowIcon />
    </div>
  </div>
);

export default FormButtonIcon;
