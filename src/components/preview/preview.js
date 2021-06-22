import '../../styles/preview.css';
import React from 'react';
import ContactInfoPreview from './contactInfoPreview';
import Objective from './objective';
import EducationPreview from './educationPreview';
import SkillsPreview from './skillsPreview';
import ExperiencePreview from './experiencePreview';

class Preview extends React.Component {
  render() {
    return (
      <div id="page-wrap">
        <ContactInfoPreview
          name={this.props.name}
          address={this.props.address}
          email={this.props.email}
          phoneNumber={this.props.phoneNumber}
          website={this.props.website}
        />
        <Objective objective={this.props.objective} />
        <dd className="clear"></dd>
        <EducationPreview schools={this.props.schools} />
        <dd className="clear"></dd>
        <SkillsPreview skills={this.props.skills} />
        <dd className="clear"></dd>
        <ExperiencePreview experience={this.props.experience} />
      </div>
    );
  }
}

export default Preview;
