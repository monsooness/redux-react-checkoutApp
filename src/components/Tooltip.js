import React from 'react';

const ToolTipComponent = ({toolTipInfo, toolTipText}) => (
<div className="tooltip">{toolTipInfo}
  <span className="tooltiptext">{toolTipText}</span>
</div>
)

export default ToolTipComponent