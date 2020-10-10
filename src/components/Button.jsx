import React from "react";

const ButtonAsLink = ({ url, color, children }) => (
  <a
    href={url}
    className="uk-button uk-button-default uk-border-rounded"
    target="_blank"
  >
    {children}
  </a>
);

const ButtonAsButton = ({ color, children }) => (
  <button className="uk-button uk-button-default">{children}</button>
);

function Button({ url, children }) {
  let component = null;
  if (url) component = <ButtonAsLink>{children}</ButtonAsLink>;
  else component = <ButtonAsButton>{children}</ButtonAsButton>;
  return component;
}

Button.defaultProps = {
  border: "rounded",
};

export default Button;
