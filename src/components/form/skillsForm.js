import React from 'react';
import uniqid from 'uniqid';

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skillName: '',
      skillDescription: '',
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd(event) {
    event.preventDefault();
    // TODO: display warning
    if (!this.state.skillName) return;
    let item = { ...this.state, id: uniqid() };
    this.props.addItem('skills', item);
    this.setState({
      skillName: '',
      skillDescription: '',
    });
  }

  handleChange(targetField, event) {
    this.setState({ [targetField]: event.target.value });
  }

  render() {
    return (
      <div className="formWrapper">
        <form class="skillForm">
          <input
            type="text"
            name="skillName"
            placeholder="Skill Name"
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
