import React from 'react';
import Screen from '../components/Screen';
import { View, Button } from "react-native";

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

export default ChessboardScreen;