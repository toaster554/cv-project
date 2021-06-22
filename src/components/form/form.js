import React from 'react';
import '../../styles/form.css';
import ContactInfoForm from './contactInfoForm';
import EducationFormSection from './educationFormSection';
import SkillsFormSection from './skillsFormSection';
import ExperienceFormSection from './experienceFormSection';

class Form extends React.Component {
  render() {
    return (
      <div id="page-wrap">
        <ContactInfoForm
          name={this.props.name}
          phoneNumber={this.props.phoneNumber}
          email={this.props.email}
          address={this.props.address}
          website={this.props.website}
          objective={this.props.objective}
          handleChange={this.props.handleChange}
        />
        <div className="clear"></div>
        <EducationFormSection
          schools={this.props.schools}
          addItem={this.props.addItem}
          removeItem={this.props.removeItem}
        />
        <div className="clear"></div>
        <SkillsFormSection
          skills={this.props.skills}
          addItem={this.props.addItem}
          removeItem={this.props.removeItem}
        />
        <div className="clear"></div>
        <ExperienceFormSection
          experience={this.props.experience}
          addItem={this.props.addItem}
          removeItem={this.props.removeItem}
        />
      </div>
    );
  }
}

export default Form;
