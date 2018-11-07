import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemDetails from '../components/ItemDetails';
import PromoCode from '../components/PromoCode';

import '../App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item_detail_slide: false,
      apply_promo_slide: false,
    };
  }

  render() {
    let data = this.props.order_info
    console.log(data.checkoutReducer[0].org_price, 20)
    return (
      <div className="App">
        <div className="checkout_container">
          <p>Subtotal</p>
          <h4>$102.96</h4>
          <p style={{ textDecoration: "underline" }}>Pickup Savings</p>
          <h4 style={{ color: "red" }}>-$3.85</h4>
          <p>Est. taxes & fees <br /> (Based on 94085)</p>
          <h4>$8.92</h4>
          <h3>Est. total</h3>
          <h2>$108.03</h2>
        </div>

        <div onClick={() => this.setState({item_detail_slide : !this.state.item_detail_slide})}>
          {this.state.item_detail_slide ? <p>Hide item details</p> : <p>See item details</p>}
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
          {this.state.apply_promo_slide ? <p>Hide promo code</p> : <p>Apply promo code</p>}
        </div>
          {this.state.apply_promo_slide ? <PromoCode /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 48)
  return { order_info: state }
}

export default connect(mapStateToProps)(App);