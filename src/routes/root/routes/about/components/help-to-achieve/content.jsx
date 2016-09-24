import Images from './images';

//
// The content of the component
//
export const content = {
  title: 'An Organization built to help you achieve',
  practice: [
    {
      id: 'tools',
      title: 'Tools',
      Img: Images.Tools,
      content:
        `Great work needs great tools. We make sure you have exactly 
        what you need to get the job done without breaking a sweat.`,
    },
    {
      id: 'development',
      title: 'Personal Development',
      Img: Images.Development,
      content:
        `No matter how experienced or inexperienced you are, at Agile Actors we
         care about what you can be and we’re by your side while you’re getting 
         there. You’ll be working with smart, skilled people, learn from the 
         best and trained to reach for the stars.`,
    },
    {
      id: 'fun',
      title: 'Fun',
      Img: Images.Fun,
      content:
        `Even if you’re not a Web Designer or a Frontend Developer, it’s essential
         to understand how users experience
         and interact with applications, what
         are the best practices and how to build
         things that make sense.`,
    },
    {
      id: 'respect',
      title: 'Respect',
      Img: Images.Respect,
      content:
        `We are respectful, open-minded and only care about being good at what you do. 
        Your gender, sexual preferences, skin color, language or family name won’t make 
        a difference here.`,
    },
  ],
  buttonLabel: 'Find out More',
  buttonRoute: '/BecomeAgileActor',
};