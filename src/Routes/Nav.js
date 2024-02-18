import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from '../Components/Intro';
import Quiz from '../Components/Quiz';
import Result from '../Components/Result';
import QuizOptions from '../Components/QuizOptions';
import Signup from '../Components/feedback/Signup';

const Stack = createNativeStackNavigator();

export default function Nav() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Intro} options={{ headerShown: false }} />
				<Stack.Screen name="Choices" component={QuizOptions} options={{ headerShown: false }} />
				<Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
				<Stack.Screen name="Final" component={Result} options={{ headerShown: false }} />
				<Stack.Screen name="Feedback" component={Signup} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}