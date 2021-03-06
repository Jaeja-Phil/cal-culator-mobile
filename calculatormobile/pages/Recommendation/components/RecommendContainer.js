import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';
import Recommend from './Recommend';
import { yesterdayNutritionQuery } from '../queries';

import dailyRecommendation from '../../Summary/helperFunctions/dailyRecommendation';
import calculateDailyIntake from '../helperFunction/calculateDailyIntake';

function RecommendContainer({ userInfo, isDoEat }) {
	const [nutritions, setNutritions] = useState({});
	const date = new Date();
	date.setDate(new Date().getDate() - 1);

	useQuery(yesterdayNutritionQuery, {
		variables: {
			date: date.toISOString().slice(0, 10),
			user_id: userInfo.userId,
		},
		onCompleted: data => {
			const { dontEat, doEat } = calculateDailyIntake(
				dailyRecommendation(userInfo.userAge, userInfo.userGender),
				data.foodusersDate,
			);
			console.log(dontEat, doEat);
			setNutritions({ dontEat, doEat });
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={styles.font}>어제의 데이터에 따르면...</Text>
			</View>
			<View style={styles.recommend}>
				<ScrollView style={styles.recommendScroll}>
					{!nutritions.doEat ? <Text>로딩중입니다</Text> :
						isDoEat ? nutritions.doEat.map(nutrition => <Recommend key={nutrition[0]} isDoEat={isDoEat} nutrition={nutrition[0]} />) :
							nutritions.dontEat.map(nutrition => <Recommend key={nutrition[0]} isDoEat={isDoEat} nutrition={nutrition[0]} />)
					}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eee',
	},
	title: {
		flex: 0.8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eee',
	},
	font: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	recommend: {
		flex: 9.2,
		width: '100%',
		alignItems: 'center',
		backgroundColor: '#eee',
	},
	recommendScroll: {
		width: '95%',
		height: '100%',
		backgroundColor: '#eee',
	},
});

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
	};
};

export default connect(mapStateToProps)(RecommendContainer);
