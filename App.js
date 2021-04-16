import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/FontAwesome5';

import { AboutScreen,ChessboardScreen,WelcomeScreen } from './src/screens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              if (route.name === 'Play') {
                return <Icon name="chess-knight" size={20} color={color} />;
              } else if (route.name === 'About') {
                return <Icon name="info" size={20} color={color} />;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#8AA832',
            inactiveTintColor: 'gray',
            style: styles.bottomNav
          }}
        >
          <Tab.Screen 
            name="Welcome" 
            component={WelcomeScreen}  
            options={{
              tabBarButton: () => null,
              tabBarVisible: false,
            }}/>
          <Tab.Screen 
            name="Play"
            component={ChessboardScreen}
          />
          <Tab.Screen 
            name="About" 
            component={AboutScreen} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353535",
    flex: 1,
    padding: 5,
  },
  bottomNav: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopColor: "rgba(0,0,0,0)",
    borderTopWidth: 0.5,
    backgroundColor: "#1e1e1e",
    shadowRadius: 30,
    elevation: 5,
    shadowOpacity: 1,
    height: 55,
    position: "absolute"
  }
});



