import React from 'react';
import uniqid from 'uniqid';
import './styles/App.css';
import Preview from './components/preview/preview';
import PreviewToggle from './components/previewToggle';
import Form from './components/form/form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Smith',
      address: '123 Street Ave SE, Houston, TX',
      email: 'jsmith233@gmail.com',
      phoneNumber: '616-631-3965',
      website: 'jsmith233.github.io',
      objective:
        "I'm a fresh graduate looking for a job to pay for my gacha addiction.",
      schools: [
        {
          schoolName: 'University of College',
          from: '2010',
          to: '2014',
          degree: 'B.S.',
          fieldOfStudy: 'Computer Science',
          id: uniqid(),
        },
        {
          schoolName: 'College of University',
          from: '2015',
          to: '2017',
          degree: 'M.S.',
          fieldOfStudy: 'Data Science',
          id: uniqid(),
        },
      ],
      skills: [
        {
          skillName: 'SQL',
          skillDescription: 'PostgresSQL, MySQL, SQLite',
          id: uniqid(),
        },
        {
          skillName: 'NoSQL',
          skillDescription: 'MongoDB, Cassandra, Redis',
          id: uniqid(),
        },
        {
          skillName: 'Programming',
          skillDescription: 'Python 3, Javascript, C#',
          id: uniqid(),
        },
      ],
      experience: [
        {
          companyName: 'ProQuest',
          role: 'Student Software Developer',
          location: 'Ann Arbor, MI',
          from: 'Jan 2020',
          to: 'Dec 2020',
          experienceDescription:
            'Improved patent search using Machine Learning',
          id: uniqid(),
        },
        {
          companyName: 'IBM',
          role: 'Intern Software Developer',
          location: 'Chicago, IL',
          from: 'Jan 2021',
          to: 'Dec 2021',
          experienceDescription: 'Did stuff',
          id: uniqid(),
        },
      ],
      inPreviewMode: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.togglePreviewState = this.togglePreviewState.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleChange(targetField, event) {
    this.setState({ [targetField]: event.target.value });
  }

  togglePreviewState() {
    console.log('changed state');
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

  render() {
    return (
      <div className="App">
        <h1 className="website-title">Resumer Builder Application</h1>
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
