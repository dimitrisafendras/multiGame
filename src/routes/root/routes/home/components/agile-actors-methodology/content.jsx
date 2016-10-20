import Images from './images';

const content = {
  title: 'How the Agile Actors Methodology Works',
  methodology: [
    {
      id: 'target',
      title: 'Set a target',
      Img: Images.Target,
      content: 'As the product owner of the most interesting product (hint: yourself), you define' +
      ' the backlog (short-term goals) and the roadmap (long-term vision) of the skills, ' +
      'knowledge and insight to be gained.',
    },
    {
      id: 'measure',
      title: 'Measure',
      Img: Images.Measure,
      content: 'Where do you stand as a tech professional? Use our advanced tools to measure ' +
      'your current status and find out how you compare to thousands of tech ' +
      'professionals worldwide.',
    },
    {
      id: 'prioritize',
      title: 'Define Priorities',
      Img: Images.Prioritize,
      content: 'Set achievable short-term goals and work towards reaching them. ' +
      'Select the right mix of training, mentoring and real-life work.',
    },
    {
      id: 'act',
      title: 'Act',
      Img: Images.Act,
      content: 'Execute what you have planned within the timeframe you have defined, whether ' +
      'you’re working for us or your current employer. Share your progress and ' +
      'get help from fellow Agile Actors.',
    },
  ],
  buttonLabel: 'Become an Agile Actor',
  buttonRoute: '/Careers',
};

export default content;
