import uniqid from 'uniqid';

let sampleInput = {
  name: 'John Smith',
  address: '123 Street Ave SE, Houston, TX',
  email: 'jsmith233@gmail.com',
  phoneNumber: '123-456-7890',
  website: 'jsmith233.github.io',
  objective: "I'm a fresh graduate looking for a job to pay for my rent.",
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
      experienceDescription: 'Improved patent search using Machine Learning',
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
};

export default sampleInput;
