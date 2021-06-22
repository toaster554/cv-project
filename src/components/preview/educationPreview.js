import React from 'react';

class School extends React.Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.schoolName}
          <span>
            {this.props.from} - {this.props.to}
          </span>
        </h2>
        <p>
          <strong>Degree:</strong> {this.props.degree}
          <br />
          <strong>Field of Study:</strong> {this.props.fieldOfStudy}
        </p>
      </div>
    );
  }
}

class EducationPreview extends React.Component {
  render() {
    let schools = this.props.schools;
    return (
      <div className="education">
        <dt>Education</dt>
        <dd>
          {schools.map((school) => (
            <School {...school} key={school.id} />
          ))}
        </dd>
      </div>
    );
  }
}

export default EducationPreview;
