import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./Collections.styles.scss";
function Collections({ title, items }) {
  return (
    <div className="collections-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
}

export default Collections;
