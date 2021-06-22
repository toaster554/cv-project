import React from 'react';

class ContactInfoPreview extends React.Component {
  render() {
    return (
      <div id="contact-info" className="vcard">
        <h1 className="fn">{this.props.name}</h1>
        <p>
          Cell: <span className="tel">{this.props.phoneNumber}</span>
          <br />
          Email:{' '}
          <a className="email" href={`mailto:${this.props.email}`}>
            {this.props.email}
          </a>
          <br />
          Address: {this.props.address}
          <br />
          Website: <a href={this.props.website}>{this.props.website}</a>
        </p>
      </div>
    );
  }
}

export default ContactInfoPreview;
