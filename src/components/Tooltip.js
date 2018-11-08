import React from 'react';

const ToolTipComponent = ({toolTipInfo, toolTipText}) => (
<div className="tooltip"><p>{toolTipInfo}</p>
  <span className="tooltiptext">{toolTipText}</span>
</div>
)

export default ToolTipComponent