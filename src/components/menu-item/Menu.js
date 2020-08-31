import React from "react";

import { withRouter } from "react-router-dom";

import "./Menu.styles.scss";

const Menu = ({ title, imageUrl, size, history, linkUrl }) => {
  return (
    <div className={`${size} menu `} onClick={() => history.push(`${linkUrl}`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(Menu);
