import React from "react";
import { Link } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import LoadingSpinner from "components/LoadingSpinner";
import ProfileCard from "components/ProfileCard";

const data = {
  "first name": "Krishna",
  "last name": "farvil",
  "company name": "bohio entertainment",
  address: "40 reservoir st, ma 02301",
  phone: "424-533-2121",
};

class ContactPage extends React.Component {
  componentDidMount() {
    //trackPromise(/* api call */);
  }

  render() {
    return (
      <>
        <ProfileCard profileInitials="JD" data={data} />
        {/* <form className="uk-form-horizontal uk-margin-large">
          <div className="uk-margin uk-width-1-2@s">
            <label className="uk-form-label" for={"Name"}>
              <span className="uk-text-uppercase">{"Name:"}</span>
            </label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                name={""}
                type="text"
                value="John Doe"
              />
            </div>
          </div>

          <div className="uk-margin uk-width-1-2@s">
            <label className="uk-form-label" for={"Name"}>
              <span className="uk-text-uppercase">{"Email:"}</span>
            </label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                name={""}
                type="text"
                value="John Doe"
              />
            </div>
          </div>

          <div className="uk-margin uk-width-1-2@s">
            <label className="uk-form-label" for={"Phone"}>
              <span className="uk-text-uppercase">{"Phone:"}</span>
            </label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                name={""}
                type="text"
                value="John Doe"
              />
            </div>
          </div>
          <div className="uk-margin-medium">
            <a
              href="https://forms.gle/cVihap5xF98kRRHw9"
              class="uk-button uk-button-default"
              target="_blank"
            >
              Save
            </a>{" "}
            &nbsp;
          </div>
        </form> */}
      </>
    );
  }
}

const styles = {};

export default ContactPage;
