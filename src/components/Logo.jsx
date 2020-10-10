import React from "react";
import { Link } from "react-router-dom";

function getImageSize(size) {
  let width;
  switch (size) {
    case "sm":
      width = "150";
      break;
    case "md":
      width = "350";
      break;
    case "lg":
      width = "450";
      break;
    default:
  }
  return width;
}

export function Logo({ color, size, path, mode }) {
  return (
    <Link to={path} className="uk-navbar-item uk-logo uk-padding-remove">
      <img src="assets/img/logo.png" alt="BohioTV" width={getImageSize(size)} />
    </Link>
  );
}

Logo.defaultProps = {
  size: "md",
  path: "/",
};
