import React from 'react';
import SkillsForm from './skillsForm';

class SkillCard extends React.Component {
  render() {
    let id = this.props.id;
    return (
      <div className="itemWrapper">
        <h2>{this.props.skillName}</h2>
        <p>
          <strong>Description:</strong> {this.props.skillDescription}
        </p>
        <button onClick={() => this.props.removeItem('skills', id)}>
          Remove
        </button>
      </div>
    );
  }
}

class SkillsFormSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { formPresent: false };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ formPresent: true });
  }

  hideForm() {
    this.setState({ formPresent: false });
  }

  render() {
    let skills = this.props.skills;
    return (
      <div id="skills" className="sectionWrapper">
        <h2 className="sectionHeader">Skills</h2>
        {skills.map((skill) => (
          <SkillCard
            {...skill}
            key={skill.id}
            removeItem={this.props.removeItem}
          />
        ))}
        {this.state.formPresent ? (
          <SkillsForm addItem={this.props.addItem} hideForm={this.hideForm} />
        ) : (
          <button onClick={this.showForm}>Add Skill</button>
        )}
      </div>
    );
  }
}

export default SkillsFormSection;
