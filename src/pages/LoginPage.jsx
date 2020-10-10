import React from "react";
import { Link, Redirect } from "react-router-dom";
import LoginFormConfig from "config/LoginFormConfig";
import { Logo } from "components";
import Form from "shared/components/Form";

export default function ({ history }) {
  const handleAuthentication = (credentials) => {
    history.push("/");
  };

  return (
    <>
      <div
        className="uk-background-cover uk-background-blend-overlay"
        uk-height-viewport="offset-bottom: 0"
        style={{
          backgroundImage: "url(/assets/img/background.JPEG)",
          ...styles.cover,
        }}
        uk-img="true"
      >
        <Logo mode="image" size="md" />
        <h2 className="uk-margin-remove uk-text-bold">Partner</h2>
        <div className="uk-margin" style={styles.form}>
          <Form
            config={LoginFormConfig}
            onSubmit={handleAuthentication}
            layout="stacked"
          />
        </div>
        <p className="uk-text-capitalize uk-text-align uk-text-emphasis uk-text-lead">
          want to become a bamboutv content partner ?&nbsp;
          <Link to="/contact" className="uk-text-danger">
            contact us
          </Link>
        </p>
      </div>
    </>
  );
}

const styles = {
  cover: {
    backgroundColor: "#212121",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  form: {
    width: "400px",
  },
};
