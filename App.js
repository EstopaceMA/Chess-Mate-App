import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Pawn from './src/components/ChessPiece/Pawn';
import Bishop from './src/components/ChessPiece/Bishop';

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

export default function App() {

  const [position, setPosition] = useState(initialPosition);


  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fca311", flex: 1 }} />
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
                  {
                  (piece !== "" && (piece === "P" || piece === "p"))  && 
                    <Pawn 
                      height={50} width={50} 
                      fill={(piece === "P" ? "#000" : "#FFF")}
                      stroke={(piece === "p" ? "#000" : "#FFF")}
                    />
                  }
                  {
                  (piece !== "" && (piece === "B" || piece === "b"))  && 
                    <Bishop 
                      height={50} width={50} 
                      fill={(piece === "B" ? "#000" : "#FFF")}
                      stroke={(piece === "B" ? "#000" : "#FFF")}
                    />
                  }
              </View>
            ))}
          </View>
        ))}
      </View>
      <View style={{ backgroundColor: "green", flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    flexDirection: "column"
  },
});



