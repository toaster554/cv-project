import React from 'react';

class PreviewToggle extends React.Component {
  render() {
    return (
      <label className="switch">
        <input type="checkbox" onClick={this.props.togglePreviewState} />
        <span className="slider"></span>
      </label>
    );
  }
}

export default PreviewToggle;
