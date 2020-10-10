import React from "react";

class Upload extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="uk-margin-top">
          <h2>Upload</h2>
          <h4 className="uk-margin-small uk-text-muted">
            Upload videos of any common format you can also upload HD videos
          </h4>
          <p className="uk-width-1-2 uk-text-primary">
            NB: You will be required to login with a gmail account before you
            can upload any videos, if you do not have a gmail account. Please
            use the gmail account below.
          </p>
          <div>
            <h4>Gmail Account:</h4>
            <ul class="uk-list uk-list-disc">
              <li>Email: johndoe@gmail.com</li>
              <li>Password: *******</li>
            </ul>
          </div>
          <p uk-margin>
            <a
              href="https://forms.gle/cVihap5xF98kRRHw9"
              class="uk-button uk-button-default"
              target="_blank"
            >
              Upload video
            </a>{" "}
            &nbsp;
            <button class="uk-button uk-button-primary">
              upload collection
            </button>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Upload;
