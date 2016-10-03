import muiTheme from 'styles/customized-mui-theme';

//
// The styles of the components
//
export const style = {
  container: {
    minWidth: '150px',
    marginRight: '20px',
    marginLeft: '20px',
    maxWidth: '640px',
  },
  img: {
    height: '81px',
    width: '49px',
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: '24px !important',
    marginBottom: '33px !important',
  },
  inkBar: {
    backgroundColor: muiTheme.palette.blue700,
    height: '4px',
    width: '70px',
    marginLeft: '10%',
  },
  subTitle: {
    color: muiTheme.palette.blue700,
    fontSize: '15px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '25px',

  },
  text: {
    fontSize: '15px',
    fontWeight: 'normal',
    maxWidth: '555px',
    marginTop: '10px',
  },
};
