import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemDetails from '../components/ItemDetails';
import PromoCode from '../components/PromoCode';
import ToolTipComponent from '../components/Tooltip';
import applyDiscount from '../actions/index';
import ColoredLine from '../components/ColoredLine';

import '../App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item_detail_slide: false,
      apply_promo_slide: false
    };
  }

  handleDiscountCode = (code) => {
    if (code === 'DISCOUNT') {
      this.props.dispatch(applyDiscount())
    } else {
      alert('Not a valid Promo Code')
    }
  }

  render() {
    let data = this.props.order_info
    console.log(data)
    return (
      <div className="App">
        <div className="checkout_container">
          <p>Subtotal</p>
          <h4>${data.checkoutReducer[0].org_price}</h4>
          <ToolTipComponent toolTipInfo={'Pickup Savings'} toolTipText={'Picking up the order in the store helps cut the cost, and we pass the savings to you'}/>
          <h4 style={{ color: "red" }}>${data.checkoutReducer[0].pickupSaving}</h4>
          <p>Est. taxes & fees <br /> (Based on 94085)</p>
          <h4>${data.checkoutReducer[0].tax_fees}</h4>
          <ColoredLine color={'black'}/> <ColoredLine />
          <h3>Est. total</h3>
          <h2>${data.checkoutReducer[0].est_total}</h2>
        </div>

        <div onClick={() => this.setState({item_detail_slide : !this.state.item_detail_slide})}>
          {this.state.item_detail_slide ? <p style={{ textDecoration: "underline" }}>Hide item details -</p> : <p style={{ textDecoration: "underline" }}>See item details +</p>}
          {this.state.item_detail_slide ? 
            <ItemDetails 
              desciption={data.checkoutReducer[0].name} 
              image={data.checkoutReducer[0].image}
              original_price={data.checkoutReducer[0].org_price}
              current_price={data.checkoutReducer[0].current_price}
              quantity={data.checkoutReducer[0].qty}
              /> : null}
        </div>
        <div onClick={() => this.setState({apply_promo_slide : !this.state.apply_promo_slide})}>
          {this.state.apply_promo_slide ? <p style={{ textDecoration: "underline" }}>Hide promo code - </p> : <p style={{ textDecoration: "underline" }}> Apply promo code +</p>}
        </div>
          {this.state.apply_promo_slide ? <PromoCode handleDiscountCode={this.handleDiscountCode}/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { order_info: state }
}

export default connect(mapStateToProps)(App);