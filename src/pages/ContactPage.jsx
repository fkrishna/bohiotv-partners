import React from "react";
import { Link } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";

import Service from "core/service";
import ContactFormConfig from "config/ContactFormConfig";

// import components
import LoadingSpinner from "components/LoadingSpinner";
import { Logo } from "components";
import Form from "shared/components/Form";

class ContactPage extends React.Component {
  componentDidMount() {
    //trackPromise(/* api call */);
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="uk-background-cover uk-background-blend-overlay"
          uk-height-viewport="offset-bottom: 0"
          style={{
            backgroundImage: "url(/assets/img/background2.jpg)",
            ...styles.cover,
          }}
          uk-img="true"
        >
          <div className="uk-container uk-padding-large">
            <h2 className="uk-text-center uk-margin-small">Contact Us</h2>
            <div className="uk-margin-large-top">
              <div style={styles.contents}>
                <div style={styles.col}>
                  <Logo path="login" />
                  <p className="uk-text-lead" style={{ color: "#fff" }}>
                    Helping studios, distributors, and independent filmmakers
                    reach the Haitian community worldwide.
                  </p>
                  <p className="uk-text-lead" style={{ color: "#fff" }}>
                    Call us now at +44 7487 836666 or fill the contact form and
                    our team will get back to you.
                  </p>
                </div>
                <div style={styles.col}>
                  <Form
                    config={ContactFormConfig}
                    onSubmit={this.handleSubmit}
                    layout="stacked"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  cover: {
    backgroundColor: "#323232",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  contents: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  col: {
    width: "45%",
  },
};

export default ContactPage;
