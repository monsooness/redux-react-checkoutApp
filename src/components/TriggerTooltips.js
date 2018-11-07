import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

class TriggersTooltips extends React.Component {
  state = {
    open: false,
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item>
            <Tooltip disableFocusListener title="Add">
              <button>Hover or touch</button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableHoverListener title="Add">
              <button>Focus or touch</button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <button>Hover</button>
            </Tooltip>
          </Grid>
          <Grid item>
            <div onClickAway={this.handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={this.handleTooltipClose}
                  open={this.state.open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Add"
                >
                  <button onClick={this.handleTooltipOpen}>Click</button>
                </Tooltip>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TriggersTooltips;