import React, { Component, TouchableOpacity } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PressButton from "./components/PressButton";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

export default function App() {
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
        }}>13dsa2</Text></View>

        <View style={{
          flex: 6,
          backgroundColor: "rgba(2, 2, 2, 1)"
        }} >
          <Row>
          <PressButton text="C" theme="clear"/>
          <PressButton text="( )" theme="operation"/> 
          <PressButton text="%" theme="operation"/>
          <PressButton text="÷" theme="operation"/>
          </Row>
          <Row>
          <PressButton text="7" theme="number"/>
          <PressButton text="8" theme="number"/> 
          <PressButton text="9" theme="number"/>
          <PressButton text="X" theme="operation"/>
          </Row>
          <Row>
          <PressButton text="4" theme="number"/>
          <PressButton text="5" theme="number"/> 
          <PressButton text="6" theme="number"/>
          <PressButton text="−" theme="operation"/>
          </Row>
          <Row>
          <PressButton text="1" theme="number"/>
          <PressButton text="2" theme="number"/> 
          <PressButton text="3" theme="number"/>
          <PressButton text="+" theme="operation"/>
          </Row>
          <Row>
          <PressButton text="+/-" theme="number"/>
          <PressButton text="0" theme="number"/> 
          <PressButton text="." theme="number"/>
          <PressButton text="=" theme="equal"/>
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
