import React from 'react';
import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';
import muiTheme from 'styles/customized-mui-theme';


//
// Define the content of the component.
//
const content = {
	title: 'Get in touch',
	text: `Feel in the form here. We’ll do our best to reach out within 24 hours.
				 Feel free to give us a call at (+30) 214 687 3500.`,
};

//
// Define the CSS styles of the component.
//
const style = {
	container: {
		backgroundColor: muiTheme.palette.blue600,
	},
	title: {
		color: muiTheme.palette.white,
	},
	subTitle: {
		maxWidth: '600px',
		marginTop: '0px',
		marginBottom: '0px',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		color: muiTheme.palette.white,
	},
};

//
// Define the component.
//
function Proposal({ sheet }) {
	const { classes } = sheet;
	return (
		<article>
			<FlexContainer largeContainer center
       className={classes.container} column>
				<Content normalTitle
         className={classes.title}>
					{content.title}
				</Content>
				<Content subTitle
				         className={classes.subTitle}>
					{content.text}
				</Content>
			</FlexContainer>
		</article>
	);
};

Proposal.propTypes = {
	sheet: React.PropTypes.object,
};

export default useSheet(Proposal, style);
