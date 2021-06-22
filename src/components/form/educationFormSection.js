import React from 'react';
import FormSectionMixin from './formSectionMixin';
import EducationForm from './educationForm';

class EducationCard extends React.Component {
  render() {
    let id = this.props.id;
    return (
      <div className="itemWrapper">
        <h2>{this.props.schoolName}</h2>
        <p>
          <strong>From:</strong> {this.props.from}
        </p>
        <p>
          <strong>To:</strong> {this.props.to}
        </p>
        <p>
          <strong>Degree:</strong> {this.props.degree}
        </p>
        <p>
          <strong>Field of Study:</strong> {this.props.fieldOfStudy}
        </p>
        <button onClick={() => this.props.removeItem('schools', id)}>
          Remove
        </button>
      </div>
    );
  }
}

class EducationFormSection extends FormSectionMixin {
  render() {
    let schools = this.props.schools;
    return (
      <div id="education" className="sectionWrapper">
        <h2 className="sectionHeader">Education</h2>
        {schools.map((school) => (
          <EducationCard
            {...school}
            key={school.id}
            removeItem={this.props.removeItem}
          />
        ))}
        {this.state.formPresent ? (
          <EducationForm
            addItem={this.props.addItem}
            hideForm={this.hideForm}
          />
        ) : (
          <button onClick={this.showForm}>Add Education</button>
        )}
      </div>
    );
  }
}

export default EducationFormSection;
