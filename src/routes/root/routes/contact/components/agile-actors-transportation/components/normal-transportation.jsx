import React from 'react';

import {
	Tabs,
	Tab,
} from 'material-ui/Tabs';

import {
	Content,
	FlexContainer,
} from 'components';

import { content } from '../content';

import {
	classes,
	styles as style,
} from '../style';

const {
	container,
	divider,
	title,
	subTitle,
	text,
} = classes;

const NormalTransportation = () => (
	<FlexContainer center column>
		<div className={divider} />
		<Tabs className={container} inkBarStyle={style.inkBar}>
			{content.means.map((mean) => (
				<Tab
					key={`aa-trans-ns-${mean.id}`}
					icon={mean.Img}
					label={mean.title}
					className={title} disableTouchRipple>
					<Content largeText className={subTitle}>
						{mean.subtitle}
					</Content>
					<Content largeText className={text}>
						{mean.content}
					</Content>
				</Tab>
			))}
		</Tabs>
	</FlexContainer>
);

export default NormalTransportation;
