import React from "react";
import {useForm} from "react-hook-form";
import Form from "../baseComponents/gui/form/Form";
import LabelInput from "../baseComponents/gui/form/LabelInput";
import requests from "../../redux/reducer/requests";
import UserForm from "./UserForm";
import {name} from "../../constants/form";


export default function CastomForm() {
  const form = useForm();
  return (
    <UserForm form={form} action={requests.thunks.form}>
        <LabelInput 
        label="Логин"
        {...{name: "test", register: () => null}}
        rules={name()}
        >

        </LabelInput>
        
        <button type="submit">Отправить</button>
    </UserForm>
  );
}
