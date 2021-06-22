import React from 'react';

class ContactInfoForm extends React.Component {
  render() {
    return (
      <form id="contact-form">
        <input
          type="text"
          id="name"
          className="contactInput"
          name="name"
          placeholder="Name"
          value={this.props.name}
          onChange={(event) => this.props.handleChange('name', event)}
        />
        <br />
        <input
          type="tel"
          id="phone"
          className="contactInput"
          name="phoneNumber"
          placeholder="Phone number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          value={this.props.phoneNumber}
          onChange={(event) => this.props.handleChange('phoneNumber', event)}
        />
        <br />
        <input
          type="email"
          id="email"
          className="contactInput"
          name="email"
          placeholder="Email Address"
          value={this.props.email}
          onChange={(event) => this.props.handleChange('email', event)}
        />
        <br />
        <input
          type="text"
          id="address"
          className="contactInput"
          name="address"
          placeholder="Address"
          value={this.props.address}
          onChange={(event) => this.props.handleChange('address', event)}
        />
        <br />
        <input
          type="text"
          id="website"
          className="contactInput"
          name="website"
          placeholder="Website"
          value={this.props.website}
          onChange={(event) => this.props.handleChange('website', event)}
        />
        <br />
        <textarea
          id="objective"
          className="contactInput"
          name="objective"
          placeholder="Objective"
          value={this.props.objective}
          onChange={(event) => this.props.handleChange('objective', event)}
        ></textarea>
      </form>
    );
  }
}

export default ContactInfoForm;
