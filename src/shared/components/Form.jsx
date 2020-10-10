import React from "react";
import { formatBytes } from "react-dropzone-uploader";
import {
  Form as RocketForm,
  Input as RocketInput,
  Select as RocketSelect,
  FileInput as RocketFileInput,
  Check as RocketCheck,
} from "@rocketseat/unform";

function dispatch(fields) {
  return fields.map((field) => {
    switch (field.type) {
      case "input":
        return <Input field={field} multiline={false} type="text" />;
      case "inputPassword":
        return <Input field={field} multiline={false} type="password" />;
      case "textarea":
        return <Input field={field} multiline={true} type="text" />;
      case "select":
        return <Select field={field} />;
      case "checkbox":
        return <Checkbox field={field} />;
      case "file":
        return <FileInput field={field} />;
      case "submit":
        return <SubmitButton label={field.label} />;
      default:
    }
  });
}

export default function Form(props) {
  let classnames = "uk-grid-small uk-form-";
  classnames += props.layout === "stacked" ? "stacked" : "horizontal";
  return (
    <RocketForm
      onSubmit={props.onSubmit}
      schema={props.config.schema}
      className={classnames}
      uk-grid="true"
    >
      {dispatch(props.config.fields)}
    </RocketForm>
  );
}

function SubmitButton(props) {
  return (
    <div class="uk-margin-small uk-width-1-1@s uk-text-align uk-flex uk-flex-center">
      <button type="submit" className="uk-button uk-button-default">
        {props.label}
      </button>
    </div>
  );
}

function Input(props) {
  const { field, multiline, type } = props;
  return (
    <div className="uk-margin-small uk-width-1-1@s">
      <label className="uk-form-label" for={field.name}>
        <span className="uk-text-uppercase">{field.label}</span>
        <p className="uk-margin-small uk-text-muted">{field.description}</p>
      </label>
      <div className="uk-form-controls">
        <RocketInput
          className="uk-input"
          name={field.name}
          id={field.name}
          multiline={multiline}
          type={type}
          placeholder={field.placeholder}
        />
      </div>
    </div>
  );
}

function Select(props) {
  const { field } = props;
  return (
    <div class="uk-margin-small uk-width-1-1@s">
      <label class="uk-form-label" for={field.name}>
        {field.label}
        <p className="uk-text-justify">{field.description}</p>
      </label>
      <div class="uk-form-controls">
        <RocketSelect
          class="uk-select"
          id={field.name}
          name={field.name}
          options={field.options}
        />
      </div>
    </div>
  );
}

function Checkbox(props) {
  const { field } = props;
  return (
    <div class="uk-margin-small uk-width-1-1@s">
      <label className="uk-form-label" for={field.name}>
        <span className="uk-text-uppercase">{field.label}</span>
        <p className="uk-margin-small uk-text-muted">{field.description}</p>
      </label>
      <div class="uk-form-controls">
        <div
          className="uk-child-width-1-2@s uk-child-width-1-4@m"
          uk-grid="true"
        >
          {field.groups &&
            field.groups.map((f) => (
              <label className="uk-text-capitalize">
                <RocketCheck
                  className="uk-checkbox"
                  name={f.name}
                  label={" " + f.label}
                />{" "}
              </label>
            ))}
        </div>
      </div>
    </div>
  );
}

function FileInput(props) {
  const { field } = props;
  return (
    <div class="uk-margin-small uk-width-1-1@s">
      <label className="uk-form-label" for={field.name}>
        <span className="uk-text-uppercase">{field.label}</span>
        <p className="uk-margin-small uk-text-muted">{field.description}</p>
      </label>
      <div class="uk-form-controls">
        <RocketFileInput name={field.name} />
      </div>
    </div>
  );
}
