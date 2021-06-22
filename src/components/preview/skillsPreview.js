import React from 'react';

class Skill extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.skillName}</h2>
        <p>{this.props.skillDescription}</p>
      </div>
    );
  }
}

class SkillsPreview extends React.Component {
  render() {
    let skills = this.props.skills;
    return (
      <div className="skills">
        <dt>Skills</dt>
        <dd>
          {skills.map((skill) => (
            <Skill {...skill} key={skill.id} />
          ))}
        </dd>
      </div>
    );
  }
}

export default SkillsPreview;
