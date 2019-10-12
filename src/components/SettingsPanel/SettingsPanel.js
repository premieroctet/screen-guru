import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TwitterPicker } from 'react-color';
import { ColorLink, Popover, Overlay, Panel } from './elements';

const SettingsPanel = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const dispatch = useDispatch();
  const { updateColor, toggleNoBackground } = dispatch.app;

  const noBackground = useSelector(state => state.app.noBackground);
  const color = useSelector(state => state.app.color);

  return (
    <Panel>
      <ColorLink
        disabled={noBackground}
        onClick={() => setShowColorPicker(!showColorPicker)}
        className="color-link"
        borderColor={color}
      >
        Pick the background color
      </ColorLink>

      <label>
        <input value={noBackground} onChange={e => toggleNoBackground(e.target.value)} type="checkbox" /> No background
      </label>

      {showColorPicker && (
        <Popover>
          <Overlay onClick={() => setShowColorPicker(false)} />
          <TwitterPicker onChangeComplete={selectedColor => updateColor(selectedColor)} />
        </Popover>
      )}
    </Panel>
  );
};

export default SettingsPanel;
