import * as Yup from "yup";

export default {
  fields: [
    {
      name: "email",
      type: "input",
      label: "email",
      placeholder: "johndoe@gmail.com"
    },
    {
      name: "password",
      type: "inputPassword",
      label: "password",
      placeholder: "******"
    },
    {
      label: "login",
      type: "submit"
    }
  ],
  schema: Yup.object().shape({
    email: Yup.string()
      .required()
      .trim(),
    password: Yup.string()
      .required()
      .trim()
  })
};
