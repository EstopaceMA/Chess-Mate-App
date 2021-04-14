import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Screen from './src/components/Screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChessPiece from './src/components/ChessPiece';

import Icon from '@expo/vector-icons/FontAwesome5';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AboutScreen from './src/screens/AboutScreen';


const initialPosition = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"]
];
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ChessboardScreen({ navigation }) {
  const [position] = useState(initialPosition);
  return (
    <Screen>
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button
            title=""
            color="#972D34"
          />
        </View>
        <View style={{ backgroundColor: "#000", flex: 2}}>
          {position.map((rowOfPieces, rowIndex) => (
            <View key={rowIndex+'row'} style={{
              flexDirection: (rowIndex % 2 === 1) ? "row" : "row-reverse",
              height: "12.5%",
            }}>
              {rowOfPieces.map((piece, colIndex) => (
                <View 
                  key={rowIndex+'row'+colIndex+'col'} 
                  style={{
                    flex: 1, 
                    flexBasis: "12.5%",
                    justifyContent: "center", 
                    backgroundColor: (colIndex % 2 === 1) ? "skyblue" : "steelblue",
                    alignItems: "center"
                }}>
                  {(piece !== "") && <ChessPiece piece={piece} />}
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={{ flex: 1 }} >
          <Button
            title=""
            color="#5C7021"
          />
        </View>
      </View>
    </Screen>
  );
}


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



