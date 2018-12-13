import React, { PureComponent } from 'react';
import { TwitterPicker } from 'react-color';
import { ColorLink, Popover, Overlay, Panel } from './elements';

class SettingsPanel extends PureComponent {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  render() {
    return (
      <Panel>
        <ColorLink onClick={this.handleClick} className="color-link" borderColor={this.props.color}>
          Pick the background color
        </ColorLink>

        {this.state.displayColorPicker ? (
          <Popover>
            <Overlay onClick={this.handleClose} />
            <TwitterPicker {...this.props} />
          </Popover>
        ) : null}
      </Panel>
    );
  }
}

export default SettingsPanel;
