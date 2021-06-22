import React from 'react';
import './styles/App.css';
import Preview from './components/preview/preview';
import PreviewToggle from './components/previewToggle';
import Form from './components/form/form';
import sampleInput from './components/sampleInput';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
      website: '',
      objective: '',
      schools: [],
      skills: [],
      experience: [],
      inPreviewMode: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.togglePreviewState = this.togglePreviewState.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.loadSampleInput = this.loadSampleInput.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange(targetField, event) {
    this.setState({ [targetField]: event.target.value });
  }

  togglePreviewState() {
    this.setState((prevState) => ({
      inPreviewMode: !prevState.inPreviewMode,
    }));
  }

  addItem(listName, item) {
    this.setState((prevState) => ({
      [listName]: [...prevState[listName], item],
    }));
  }

  removeItem(listName, itemID) {
    this.setState((prevState) => ({
      [listName]: prevState[listName].filter((item) => item.id !== itemID),
    }));
  }

  loadSampleInput() {
    this.setState({ ...sampleInput });
  }

  clearState() {
    this.setState({
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
      website: '',
      objective: '',
      schools: [],
      skills: [],
      experience: [],
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="website-title">Resumer Builder Application</h1>
        <div className="load-clear-container">
          <button onClick={this.loadSampleInput}>
            <h3>Load Sample Input</h3>
          </button>
          <button onClick={this.clearState}>
            <h3>Clear Form</h3>
          </button>
        </div>
        <PreviewToggle togglePreviewState={this.togglePreviewState} />
        {this.state.inPreviewMode ? (
          <Preview {...this.state} />
        ) : (
          <Form
            {...this.state}
            handleChange={this.handleChange}
            addItem={this.addItem}
            removeItem={this.removeItem}
          />
        )}
      </div>
    );
  }
}

export default App;
