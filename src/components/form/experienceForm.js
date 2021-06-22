import React from 'react';
import uniqid from 'uniqid';
import WarningMessage from './warningMessage';

class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      role: '',
      location: '',
      from: '',
      to: '',
      experienceDescription: '',
      displayWarningMessage: false,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd(event) {
    event.preventDefault();
    if (
      !this.state.companyName ||
      !this.state.role ||
      !this.state.location ||
      !this.state.from ||
      !this.state.to
    ) {
      this.setState({ displayWarningMessage: true });
      return;
    }

    let item = { ...this.state, id: uniqid() };
    this.props.addItem('experience', item);
    this.setState({
      companyName: '',
      role: '',
      location: '',
      from: '',
      to: '',
      experienceDescription: '',
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
        <form className="experienceForm">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name (Required)"
            value={this.state.companyName}
            onChange={(event) => this.handleChange('companyName', event)}
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role (Required)"
            value={this.state.role}
            onChange={(event) => this.handleChange('role', event)}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location (Required)"
            value={this.state.location}
            onChange={(event) => this.handleChange('location', event)}
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
          <textarea
            name="experienceDescription"
            placeholder="Experience Description"
            value={this.state.experienceDescription}
            onChange={(event) =>
              this.handleChange('experienceDescription', event)
            }
          ></textarea>
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.props.hideForm}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default ExperienceForm;
