import React from 'react';

const ItemDetails = ({image, desciption, original_price, current_price, quantity}) => (
  <div className="item_container">
    <div><img src={image} height="80" width="80" /></div>
    <div>
      {desciption}
      <div className='split_in_half'>
        <p>{current_price}</p>
        <p>Qty:{quantity}</p>
      </div>
      {original_price}
    </div>
  </div>
)

export default ItemDetails