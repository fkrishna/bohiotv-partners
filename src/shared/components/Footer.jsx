import React from "react";

function Footer(props) {
  return (
    <footer className="uk-padding">
      <div className="uk-container text-align-center uk-flex uk-flex-center uk-flex-column uk-flex-middle">
        <div>
          &copy; 2019&nbsp;
          <span className="uk-text-bold uk-text-emphasis">BambooTV</span>
          &nbsp;&#45;&nbsp;Media Partners
        </div>
        <div className="uk-text-small uk-text-muted">
          Made with&nbsp;
          <i className="fas fa-heart" style={{ color: "#f0506e" }}></i>
          &nbsp;in Massachusetts
        </div>
      </div>
    </footer>
  );
}

export default Footer;
