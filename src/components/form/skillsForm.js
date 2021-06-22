import React from 'react';
import uniqid from 'uniqid';
import WarningMessage from './warningMessage';

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skillName: '',
      skillDescription: '',
      displayWarningMessage: false,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd(event) {
    event.preventDefault();
    if (!this.state.skillName) {
      this.setState({ displayWarningMessage: true });
      return;
    }
    let item = { ...this.state, id: uniqid() };
    this.props.addItem('skills', item);
    this.setState({
      skillName: '',
      skillDescription: '',
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
        <form class="skillForm">
          <input
            type="text"
            name="skillName"
            placeholder="Skill Name (Required)"
            value={this.state.skillName}
            onChange={(event) => this.handleChange('skillName', event)}
            required
          />
          <textarea
            name="skillDescription"
            placeholder="Skill Description"
            value={this.state.skillDescription}
            onChange={(event) => this.handleChange('skillDescription', event)}
          ></textarea>
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.props.hideForm}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default SkillsForm;
