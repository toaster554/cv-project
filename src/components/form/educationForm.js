import React from 'react';
import uniqid from 'uniqid';
import WarningMessage from './warningMessage';

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      from: '',
      to: '',
      degree: '',
      fieldOfStudy: '',
      displayWarningMessage: false,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd(event) {
    event.preventDefault();
    if (!this.state.schoolName || !this.state.from || !this.state.to) {
      this.setState({ displayWarningMessage: true });
      return;
    }
    let item = { ...this.state, id: uniqid() };
    this.props.addItem('schools', item);
    this.setState({
      schoolName: '',
      from: '',
      to: '',
      degree: '',
      fieldOfStudy: '',
      displayWarningMessage: false,
    });
  }

  handleChange(targetField, event) {
    this.setState({ [targetField]: event.target.value });
  }

  render() {
    return (
      <div className="formWrapper">
        {this.state.displayWarningMessage && <WarningMessage />}
        <form className="educationForm">
          <input
            type="text"
            name="schoolName"
            placeholder="School Name (Required)"
            value={this.state.schoolName}
            onChange={(event) => this.handleChange('schoolName', event)}
            required
          />
          <input
            type="text"
            name="from"
            placeholder="From (MM/YYYY) (Required)"
            value={this.state.from}
            onChange={(event) => this.handleChange('from', event)}
            required
          />
          <input
            type="text"
            name="to"
            placeholder="To (MM/YYYY) (Required)"
            value={this.state.to}
            onChange={(event) => this.handleChange('to', event)}
            required
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={this.state.degree}
            onChange={(event) => this.handleChange('degree', event)}
          />
          <input
            type="text"
            name="fieldOfStudy"
            placeholder="Field of Study"
            value={this.state.fieldOfStudy}
            onChange={(event) => this.handleChange('fieldOfStudy', event)}
          />
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.props.hideForm}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default EducationForm;
