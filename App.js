import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from './src/components/Screen';

import ChessPiece from './src/components/ChessPiece';


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

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chessy</Text>
        <Text>Chessy</Text>
        <Button
          title="LETS PLAY"
          onPress={() => navigation.navigate('Chessy')}
        />
      </View>
    </Screen>
  );
}

function ChessboardScreen({ navigation }) {
  const [position] = useState(initialPosition);
  return (
    <Screen>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Button
            title=""
            color="#EC3C3D"
            onPress={() => navigation.goBack()}
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
        <View style={{ flex: 1, justifyContent: "flex-end" }} >
          <Button
            title=""
            color="#49BD78"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </Screen>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Chessy" component={ChessboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    flex: 1,
    padding: 10,
  },
});



