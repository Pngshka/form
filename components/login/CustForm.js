import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Form from "../baseComponents/gui/form/Form";
import LabelInput from "../baseComponents/gui/form/LabelInput";
import requests, { useRequestData } from "../../redux/reducer/requests";
import { name, message, password } from "../../constants/form";

//slots, errors, register, div

export default function CustForm() {
  const { register, form } = useForm();

  const action = requests.thunks.form;

  const requestName = action?.typePrefix ?? "";
  const dispatch = useDispatch();
  const { request } = useRequestData(requestName);
  const clearError = useCallback(
    (field) =>
      dispatch(
        requests.actions.clearError({
          field,
          requestName,
        })
      ),
    [action]
  );
  const onSubmit = useCallback((data) => dispatch(action(data)), [action]);

  // debugger
  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      className="login"
      errors={{
        clearError,
        errors: request?.error?.fields,
      }}
    >
      <LabelInput
        label={<div className={"input__name"}>Name: </div>}
        name={"name"}
        rules={name()}
        {...register("name", {
          onChange: () => {
            clearError()
            console.log("dasfddsfsf")

          },required: 'Please enter something',}
        )}
      ></LabelInput>
      <br />

      <br />
      <LabelInput
        label={<div className={"input__name"}>Message: </div>}
        name={"message"}
        rules={message()}
        {...register("message", { required: true })}
      ></LabelInput>
      <br />

      <br />
      <LabelInput
        label={<div className={"input__name"}>Password: </div>}
        name={"password"}
        rules={password()}
        {...register("password", { required: true })}
      ></LabelInput>
      <br />

      <br />
      <button type="submit" id="myButton">
        Отправить
      </button>
    </Form>
  );
}
