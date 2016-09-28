import Images from './images';

//
// The content of the component
//
export const content = {
  title: 'Agile Actors for Organizations',
  subTitle: 'Make sure your tech workforce fits your business needs',
  organisations: [
    {
      id: 'levelUp',
      Img: Images.OrganizationLevelUp,
      content: 'Level up your team',
      buttonLabel: 'How we can help you',
      buttonRoute: '/BecomeAgileActor',
    },
    {
      id: 'talent',
      Img: Images.OrganizationTalent,
      content: 'Get the right talent',
      buttonLabel: 'Learn More',
      buttonRoute: '/BecomeAgileActor',
    },
  ],
};