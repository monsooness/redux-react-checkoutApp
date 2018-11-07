import React from 'react';

class PromoCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : ''}
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    this.props.handleDiscountCode(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <button style={{borderRadius: '25px'}} onClick={this.handleClick.bind(this)}>Apply</button>
      </div> 
    )
  }
}

export default PromoCode