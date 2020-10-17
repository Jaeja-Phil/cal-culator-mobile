import React from 'react';
import { Image } from 'react-native-elements';

export default function HeaderRightIcon() {
	return (
		<Image
			source={require('../asset/Image/cal-culator-logo.png')}
			style={{ marginLeft: 15, width: 30, height: 30 }}
		/>
	);
}
