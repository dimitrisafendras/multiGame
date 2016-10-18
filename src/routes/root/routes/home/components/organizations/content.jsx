import Images from './images';

const content = {
  title: 'Agile Actors for Organizations',
  subTitle: 'Make sure your tech workforce fits your business needs',
  organisations: {
    levelUp: {
      id: 'levelUp',
      Img: Images.OrganizationLevelUp,
      content: 'Level up your team',
      buttonLabel: 'How we can help you',
      buttonRoute: '/Organizations',
    },
    talent: {
      id: 'talent',
      Img: Images.OrganizationTalent,
      content: 'Get the right talent',
      buttonLabel: 'Learn More',
      buttonRoute: '/Organizations',
    },
  },
};

export default content;
