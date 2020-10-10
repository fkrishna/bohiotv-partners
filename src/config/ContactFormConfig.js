import * as Yup from "yup";

export default {
  fields: [
    {
      name: "full name",
      type: "input",
      label: "full name",
      placeholder: "John Doe"
    },
    {
      name: "email",
      type: "input",
      label: "email",
      placeholder: "johndoe@gmail.com"
    },
    {
      name: "phone",
      type: "input",
      label: "phone number",
      placeholder: "954-745-3232"
    },
    {
      name: "message",
      type: "textarea",
      label: "message",
      placeholder: "talk to us"
    },
    {
      label: "send",
      type: "submit"
    }
  ],
  schema: Yup.object().shape({
    username: Yup.string()
      .required()
      .trim(),
    password: Yup.string()
      .required()
      .trim()
  })
};
