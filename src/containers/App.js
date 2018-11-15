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
      apply_promo_slide: false,
      discountAdded: 0
    };
  }

  handleDiscountCode = (code) => {
    if (code === 'DISCOUNT' && this.state.discountAdded<1) {
      this.setState({discountAdded: this.state.discountAdded + 1})
      this.props.dispatch(applyDiscount())
    } else {
      alert('Not a valid Promo Code or a used code')
    }
  }

  render() {
    let data = this.props.order_info.checkoutReducer[0]
    console.log(data)
    return (
      <div className="App">
        <div className="checkout_container">
          <p>Subtotal</p>
          <h4 className="align_right">${data.org_price}</h4>
          <ToolTipComponent toolTipInfo={'Pickup Savings'} toolTipText={'Picking up the order in the store helps cut the cost, and we pass the savings to you'}/>
          <h4 className="align_right" style={{ color: "red" }}>${data.pickupSaving}</h4>
          <p>Est. taxes & fees <br /> (Based on 94085)</p>
          <h4 className="align_right">${data.tax_fees}</h4>
          <ColoredLine color={'lightgrey'}/> <ColoredLine color={'black'}/>
          <h2>Est. total</h2>
          <h1 className="align_right">${data.est_total}</h1>
        </div>

        <div onClick={() => this.setState({item_detail_slide : !this.state.item_detail_slide})}>
          {this.state.item_detail_slide ? 
            <div className={"split_in_half"}>
              <p style={{ textDecoration: "underline" }}>Hide item details </p> 
              <p> - </p> 
            </div> : 
            <div className={"split_in_half"}>
              <p style={{ textDecoration: "underline" }}>See item details </p> 
              <p>+</p>
            </div>}
          {this.state.item_detail_slide ? 
            <ItemDetails 
              desciption={data.name} 
              image={data.image}
              original_price={data.org_price}
              current_price={data.current_price}
              quantity={data.qty}
              /> : null}
        </div>
        <ColoredLine color={'lightgrey'}/> 
        <div onClick={() => this.setState({apply_promo_slide : !this.state.apply_promo_slide})}>
          {this.state.apply_promo_slide ? 
          <div className={"split_in_half"}>
            <p style={{ textDecoration: "underline" }}>Hide promo code </p>
            <p> - </p>
          </div> : 
          <div className={"split_in_half"}>
            <p style={{ textDecoration: "underline" }}> Apply promo code </p>
            <p>+</p>
        </div>}
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