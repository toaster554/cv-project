import React from 'react';

class ExperienceItem extends React.Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.companyName}
          <span>
            {this.props.role} - {this.props.location} - {this.props.from}-
            {this.props.to}
          </span>
        </h2>
        <p>{this.props.experienceDescription}</p>
      </div>
    );
  }
}

class ExperiencePreview extends React.Component {
  render() {
    let experience = this.props.experience;
    return (
      <div className="experience">
        <dt>Experience</dt>
        <dd>
          {experience.map((experienceItem) => (
            <ExperienceItem {...experienceItem} key={experienceItem.id} />
          ))}
        </dd>
      </div>
    );
  }
}

export default ExperiencePreview;
