import Images from './images';

const content = {
  title: 'What You will Practice As An Agile Actor',
  practice: [
    {
      id: 'methodologies',
      title: 'Agile Methodologies',
      Img: Images.Methodologies,
      content:
        `Scrum, Management 3.0 and everything that makes possible
      the development and maintenance of complex projects and applications.`,
    },
    {
      id: 'uiUx',
      title: 'UX / UI',
      Img: Images.UiUx,
      content:
        `Even if you’re not a Web Designer or a Frontend Developer, it’s essential to
      understand how users experience and interact with applications, what are the best
      practices and how to build things that make sense.`,
    },
    {
      id: 'swDevelopment',
      title: 'Software Development',
      Img: Images.SwDevelopment,
      content:
        `Frontend, backend, mobile, big data, event driven, responsive, integration
      and so on. Software development is more complex than ever and we’re here to
      carefully select and practice what’s relevant, useful and meaningful for the
      modern tech professional.`,
    },
    {
      id: 'coaching',
      title: 'Personal Coaching',
      Img: Images.Coaching,
      content:
        `Through practice, expert guidance and help, we’re making your career
      goals take shape. An Agile Actor is learning to be a coach and a coachee,
      evolving and maturing in both roles.`,
    },
  ],
  buttonLabel: 'Find out More',
  buttonRoute: '/Carrers',
};

export default content;
