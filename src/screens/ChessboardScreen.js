import React, { useState } from 'react';
import { View, Button, StyleSheet } from "react-native";

import Screen from '../components/Screen';
import ChessPiece from '../components/ChessPiece';

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

const ChessboardScreen = () => {
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
                      ...styles.pieces, 
                      backgroundColor: (colIndex % 2 === 1) ? "#F7DFBD" : "#B38866",
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

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#353535",
      flex: 1,
      padding: 5,
    },
    pieces: {
      flex: 1, 
      flexBasis: "12.5%",
      justifyContent: "center",
      alignItems: "center"
    }
});

export default ChessboardScreen;