import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
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
        <ColorLink
          disabled={this.props.noBackground}
          onClick={this.handleClick}
          className="color-link"
          borderColor={this.props.color}
        >
          Pick the background color
        </ColorLink>

        <label>
          <input
            value={this.props.noBackground}
            onChange={e => this.props.onToggleBackground(e.target.value)}
            type="checkbox"
          />{' '}
          No background
        </label>

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

const mapState = state => ({
  noBackground: state.app.noBackground,
  color: state.app.color,
});

const mapDispatch = state => ({
  onToggleBackground: state.app.toggleNoBackground,
  onChangeComplete: state.app.updateColor,
});

export default connect(
  mapState,
  mapDispatch,
)(SettingsPanel);
