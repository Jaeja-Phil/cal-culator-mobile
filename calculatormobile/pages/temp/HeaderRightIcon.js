import React from 'react';
import { Icon } from 'react-native-elements';
import Login from '../pages/Login/Login';

export default function HeaderRightIcon({ navigation, userInfo }) {
	return (
		<Icon
			name='setting'
			type='antdesign'
			onPress={() => navigation.navigate('Login', { userInfo })}
		/>
	);
}
