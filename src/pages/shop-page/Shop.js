import React, { Component } from "react";
import SHOP_DATA from "./DataShop";
import Collections from "../../components/collections/Collections";

export class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shopage">
        <h1>Shop page</h1>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Collections key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
 