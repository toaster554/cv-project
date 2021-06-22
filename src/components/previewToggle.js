import React from 'react';

class PreviewToggle extends React.Component {
  render() {
    return (
      <div className="toggle-wrapper">
        <h2 className="toggle-label">Preview</h2>
        <label className="switch">
          <input type="checkbox" onClick={this.props.togglePreviewState} />
          <span className="slider"></span>
        </label>
      </div>
    );
  }
}

export default PreviewToggle;
