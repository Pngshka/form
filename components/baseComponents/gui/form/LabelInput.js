import React, { cloneElement, createElement, isValidElement, useContext } from "react";
import * as PropTypes from "prop-types";
import Input from "./Input";
import ThemeContext from '../../../../components/login/CustForm'

export default function LabelInput({ label, labelAs, labelTextProps, labelProps, ...rest }) {
  const theme = useContext(ThemeContext);
  const classsdName = 'panel-' + theme;

  console.log(classsdName)

  labelTextProps = { ...labelTextProps, label };
  if(typeof labelAs === "string")
    labelTextProps.children = label;
  return (
    <label {...labelProps}>
      {labelAs
        ? isValidElement(labelAs)
          ? cloneElement(labelAs, labelTextProps)
          : createElement(labelAs, labelTextProps)
        : label}
      <Input {...rest}/>
    </label>
  );
}


LabelInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element,
  ]),
  labelTextProps: PropTypes.object,
  labelProps: PropTypes.object,
};
