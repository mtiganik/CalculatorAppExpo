import React, { Component, TouchableOpacity } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PressButton from "./components/PressButton";
import Row from "./components/Row";
// import calculator, { initialState } from "./util/calculatorOld";
import Calculate from "./util/calculator";


const initialVals = {
  currString: "123",
  result: 1
}

export default function App() {
  const [currentVal, setCurrentVal] = React.useState(initialVals)

  const handlePress = (addedChar) => {
    setCurrentVal((prevVal) => {
      const [newCurrString, newResult] = Calculate(prevVal.currString, addedChar)
      return {
        ...prevVal,
        currString: newCurrString,
        result: newResult
      }
    })
  }     
    return (
     <View style={styles.container}>
        <View style={{
          flex: 4,
          backgroundColor: "brown",
          textAlign: "right",
          marginTopTop:30

        }} ><Text style={{
          fontSize:42,
          textAlign: "center",
        }}>1343</Text>
        <Text>{currentVal.currString}</Text>
        <Text>{currentVal.result}</Text>
        </View>

        <View style={{
          flex: 6,
          backgroundColor: "rgba(2, 2, 2, 1)"
        }} >
          <Row>
          <PressButton text="C" theme="clear" onPress = {() => handlePress("C")}/>
          <PressButton text="del" theme="operation" onPress = {() => handlePress("d")}/> 
          <PressButton text="%" theme="operation" onPress = {() => handlePress("%")}/>
          <PressButton text="÷" theme="operation" onPress = {() => handlePress("÷")}/>
          </Row>
          <Row>
          <PressButton text="7" theme="number" onPress = {() => handlePress("7")}/>
          <PressButton text="8" theme="number" onPress = {() => handlePress("8")}/> 
          <PressButton text="9" theme="number" onPress = {() => handlePress("9")}/>
          <PressButton text="X" theme="operation" onPress = {() => handlePress("*")}/>
          </Row>
          <Row>
          <PressButton text="4" theme="number" onPress = {() => handlePress("4")}/>
          <PressButton text="5" theme="number" onPress = {() => handlePress("5")}/> 
          <PressButton text="6" theme="number" onPress = {() => handlePress("6")}/>
          <PressButton text="−" theme="operation" onPress = {() => handlePress("-")}/>
          </Row>
          <Row>
          <PressButton text="1" theme="number" onPress = {() => handlePress("1")}/>
          <PressButton text="2" theme="number" onPress = {() => handlePress("2")}/> 
          <PressButton text="3" theme="number" onPress = {() => handlePress("3")}/>
          <PressButton text="+" theme="operation" onPress = {() => handlePress("+")}/>
          </Row>
          <Row>
          <PressButton text="+/-" theme="number" onPress = {() => handlePress("posNeg")}/>
          <PressButton text="0" theme="number" onPress = {() => handlePress("0")}/> 
          <PressButton text="." theme="number" onPress = {() => handlePress(".")}/>
          <PressButton text="=" theme="equal" onPress = {() => handlePress("=")}/>
          </Row>

        </View>
      </View>
    );
  }
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  }
});
