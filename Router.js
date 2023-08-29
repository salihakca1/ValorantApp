import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AgentScreen from './src/pages/Agents/AgentScreen';
import AgentDetailScreen from './src/pages/Agents/AgentDetailScreen';

import MapScreen from './src/pages/Maps/MapScreen';
import MapDetailScreen from './src/pages/Maps/MapDetailScreen';

import WeaponScreen from './src/pages/Weapons/WeaponScreen';
import WeaponDetailScreen from './src/pages/Weapons/WeaponDetailScreen';

import TiersScreen from './src/pages/Tiers/TiersScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AgentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AgentScreen" component={AgentScreen}  />
      <Stack.Screen name="AgentDetailScreen" component={AgentDetailScreen} />
    </Stack.Navigator>
  );
};

const MapStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="MapDetailScreen" component={MapDetailScreen} />
    </Stack.Navigator>
  );
};

const WeaponStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WeaponScreen" component={WeaponScreen} />
      <Stack.Screen name="WeaponDetailScreen" component={WeaponDetailScreen} />
    </Stack.Navigator>
  );
};

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Agent"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Agent') {
              iconName = 'account-multiple';
            } else if (route.name === 'Map') {
              iconName = 'map';
            } else if (route.name === 'Weapon') {
              iconName = 'pistol';
            } else if (route.name === 'Tiers') {
              iconName = 'diamond-stone';
            }

            return <Icon name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: 'red', 
          tabBarShowLabel: false, 
          tabBarStyle: { borderTopColor: 'transparent', backgroundColor: '#333333' }, 
        })}
      >
        
        <Tab.Screen name="Agent" component={AgentStack}  options={{
              title: 'Agents', 
              headerStyle: {backgroundColor: '#333333'},
              headerTitleStyle: {color: 'white'},
              headerTintColor: 'white'
            }} />
        <Tab.Screen name="Map" component={MapStack} options={{
              title: 'Maps', 
              headerStyle: {backgroundColor: '#333333'},
              headerTitleStyle: {color: 'white'},
              headerTintColor: 'white'
            }}/>
            
        <Tab.Screen name="Weapon" component={WeaponStack} options={{
              title: 'Weapons', 
              headerStyle: {backgroundColor: '#333333'},
              headerTitleStyle: {color: 'white'},
              headerTintColor: 'white'
            }}/>
        <Tab.Screen name="Tiers" component={TiersScreen} options={{
              title: 'Tiers', 
              headerStyle: {backgroundColor: '#333333'},
              headerTitleStyle: {color: 'white'},
              headerTintColor: 'white'
            }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;