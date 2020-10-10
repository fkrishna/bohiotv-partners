import React from "react";
import Button from "components/Button";

function ProfileCard({ profileInitials, data }) {
  const keys = Object.keys(data);
  return (
    <>
      <div className="profile-avatar">{profileInitials}</div>
      <ul class="uk-list" style={styles.list}>
        {keys &&
          keys.map((key) => (
            <li>
              <span className="uk-text-primary uk-text-capitalize">{key}:</span>{" "}
              <span className="uk-text-capitalize">{data[key]}</span>
            </li>
          ))}
      </ul>
      <p uk-margin>
        <Button>edit</Button>
      </p>
    </>
  );
}
const styles = {
  list: {
    fontSize: "1.15em",
  },
};
ProfileCard.defaultProps = {};
export default ProfileCard;
