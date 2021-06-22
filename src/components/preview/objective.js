import React from 'react';

class Objective extends React.Component {
  render() {
    return (
      <div id="objective">
        <p>{this.props.objective}</p>
      </div>
    );
  }
}

export default Objective;
