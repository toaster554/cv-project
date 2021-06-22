import React from 'react';
import FormSection from './formSection';
import ExperienceForm from './experienceForm';

class ExperienceCard extends React.Component {
  render() {
    let id = this.props.id;
    return (
      <div className="itemWrapper">
        <h2>{this.props.companyName}</h2>
        <p>
          <strong>Role:</strong> {this.props.role}
        </p>
        <p>
          <strong>From:</strong> {this.props.from}
        </p>
        <p>
          <strong>Location:</strong> {this.props.location}
        </p>
        <p>
          <strong>To:</strong> {this.props.to}
        </p>
        <p>
          <strong>Experience Description:</strong>{' '}
          {this.props.experienceDescription}
        </p>
        <button onClick={() => this.props.removeItem('experience', id)}>
          Remove
        </button>
      </div>
    );
  }
}

class ExperienceFormSection extends FormSection {
  render() {
    let experience = this.props.experience;
    return (
      <div id="experience" className="sectionWrapper">
        <h2 className="sectionHeader">Experience</h2>
        {experience.map((experienceItem) => (
          <ExperienceCard
            {...experienceItem}
            key={experienceItem.id}
            removeItem={this.props.removeItem}
          />
        ))}
        {this.state.formPresent ? (
          <ExperienceForm
            addItem={this.props.addItem}
            hideForm={this.hideForm}
          />
        ) : (
          <button onClick={this.showForm}>Add Experience</button>
        )}
      </div>
    );
  }
}

export default ExperienceFormSection;
