import React from 'react';

const ItemDetails = ({image, desciption, original_price, current_price, quantity}) => (
  <div className="item_container">
    <div><img src={image} height="80" width="80" alt="Selected Item"/></div>
    <div>
      {desciption}
      <div className="split_in_half">
        <p style={{ fontWeight: "bold" }}>{current_price}</p>
        <p >Qty:{quantity}</p>
      </div>
        <p style={{ textDecorationLine: "line-through" }}>{original_price}</p>
    </div>
  </div>
)

export default ItemDetails