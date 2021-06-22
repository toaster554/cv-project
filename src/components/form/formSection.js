import React from 'react';

class FormSection extends React.Component {
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
}

export default FormSection;
