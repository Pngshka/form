import React, { useCallback, useContext, createContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Form from "../baseComponents/gui/form/Form";
import LabelInput from "../baseComponents/gui/form/LabelInput";
import requests, { useRequestData } from "../../redux/reducer/requests";
import { name, message, password } from "../../constants/form";

//slots, errors, register, div
export const ThemeContext = createContext(null);

export default function CustForm() {
  const form = useForm();

  const action = requests.thunks.form;

  const requestName = action?.typePrefix ?? "";
  const dispatch = useDispatch();
  const { request } = useRequestData(requestName);
  const clearError = useCallback(field => {
    console.log("DISPATCH");
    dispatch(requests.actions.clearError({
      field,
      requestName
    })), [action]
  }
  );
  const onSubmit = useCallback((data) => dispatch(action(data)), [action]);

  //console.log({...register()})
  // debugger
  // form.register = (a, b) => {
  //   console.log(b);
  //   return {onChange: () => {
  //         clearError()
  //         console.log("dasfddsfsf")

  //       }}
  // };

  return (
    <ThemeContext.Provider value="dark">
      <Form
        form={form}
        onSubmit={onSubmit}
        className="login"
        errors={{
          clearError,
          errors: request?.error?.fields,
        }}
      >
        <div>
          <LabelInput
            label={<div className={"input__name"}>Name: </div>}
            name={"name"}
            rules={name()}
          ></LabelInput>
          <br />

          <br />
          <LabelInput
            label={<div className={"input__name"}>Message: </div>}
            name={"message"}
            rules={message()}
            {...{
              regiskjhgfter: {
                register: (...args) => {
                  console.log(args[0]);
                  return control.register(...args);
                }
              }
            }}
          ></LabelInput>
          <br />

          <br />
          <LabelInput
            label={<div className={"input__name"}>Password: </div>}
            name={"password"}
            rules={password()}
            register={"password"}
          ></LabelInput>
        </div>
        <br />

        <br />
        <button type="submit" id="myButton">
          Отправить
        </button>
      </Form>
    </ThemeContext.Provider>
  );
}
