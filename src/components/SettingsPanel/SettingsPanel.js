import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TwitterPicker } from 'react-color';
import { ColorLink, Popover, Overlay, Panel } from './elements';

const SettingsPanel = props => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <Panel>
      <ColorLink
        disabled={props.noBackground}
        onClick={() => setShowColorPicker(!showColorPicker)}
        className="color-link"
        borderColor={props.color}
      >
        Pick the background color
      </ColorLink>

      <label>
        <input value={props.noBackground} onChange={e => props.onToggleBackground(e.target.value)} type="checkbox" /> No
        background
      </label>

      {showColorPicker && (
        <Popover>
          <Overlay onClick={() => setShowColorPicker(false)} />
          <TwitterPicker {...props} />
        </Popover>
      )}
    </Panel>
  );
};

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
