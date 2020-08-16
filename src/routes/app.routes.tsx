import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';

const AppStack = createStackNavigator();

const routeProps = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  cardStyle: { backgroundColor: '#312e38', headerShown: false },
};

const AuthRoutes: React.FC = () => (
  <AppStack.Navigator headerMode="none" screenOptions={routeProps}>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);
export default AuthRoutes;
