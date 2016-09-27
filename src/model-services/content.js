const navigationContents = {
  content: {
    organizations: {
      title: 'Business Services',
      link: '/Organizations',
      order: 1,
    },
    careers: {
      title: 'Careers',
      link: '/Careers',
      order: 1,
    },
    about: {
      title: 'About',
      link: '/About',
      order: 2,
    },
    contact: {
      title: 'Contact',
      link: '/Contact',
      order: 2,
    },
    blog: {
      title: 'Blog',
      link: 'http://blog.agileactors.com/',
      order: 3,
    },
  },
};

export const minimunIncluded = (elm) => elm.order === 1;
export const mediumIncluded = (elm) => elm.order <= 2;
export const allIncluded = (elm) => elm.order <= 5;

export default Object.values(navigationContents.content);
