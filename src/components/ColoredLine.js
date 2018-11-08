import React from 'react'

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: {color},
      margin: '0',
    }}
  />
);

export default ColoredLine