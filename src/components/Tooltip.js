import React from 'react';

const ToolTipComponent = ({toolTipInfo, toolTipText}) => (
<div class="tooltip">{toolTipInfo}
  <span class="tooltiptext">{toolTipText}</span>
</div>
)

export default ToolTipComponent