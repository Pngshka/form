import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Form from "../baseComponents/gui/form/Form";
import LabelInput from "../baseComponents/gui/form/LabelInput";
import requests from "../../redux/reducer/requests";
import UserForm from "./UserForm";
import { name, message, password } from "../../constants/form";

export default function CastForm() {
  const form = useForm();

  const action = requests.thunks.form;
  const dispatch = useDispatch();
  const onSubmit = useCallback((data) => dispatch(action(data)), [
    requests.thunks.form,
  ]);

  return (
    <Form form={form} onSubmit={onSubmit} className="login">
      <LabelInput
        label={<div className={"input__name"}>Name: </div>}
        {...{ name: "name", register: () => null }}
        rules={name()}
      ></LabelInput>
      <br />

      <br />
      <LabelInput
        label={<div className={"input__name"}>Message: </div>}
        {...{ name: "message", register: () => null }}
        rules={message()}
      ></LabelInput>
      <br />

      <br />
      <LabelInput
        label={<div className={"input__name"}>Password: </div>}
        {...{ name: "password", register: () => null }}
        rules={password()}
      ></LabelInput>
      <br />

      <br />
      <button type="submit" id="myButton">
        Отправить
      </button>
    </Form>
  );
}
