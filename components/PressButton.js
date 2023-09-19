import React from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const PressButton= ({text, theme, onPress}) => {

const buttonTheme = [styles.number]
const textTheme = [styles.text]

if(theme === "operation"){
  textTheme.push(styles.operationText)
}
else if (theme === "equal"){
  buttonTheme.push(styles.equalBackground)
}
else if (theme === "clear"){
  textTheme.push(styles.clearText)
}
  return(
    <TouchableOpacity  onPress={onPress}
    style={buttonTheme}
    >
      <Text style={textTheme}>{text}</Text>
    </TouchableOpacity >
  )
}

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 5;


const styles = StyleSheet.create({
  number:{
    backgroundColor: '#1F1F1F',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: Math.floor(buttonWidth),
    width: buttonWidth,
    height: buttonWidth,
    margin:5
  },
  text:{
    fontSize:36,
    color:"#FFFFFF"
  },
  clearText:{
    color:"rgba(251, 103, 89, 1)"
  },
  operationText:{
    color:"#A6CD70"
  },
  equalBackground:{
    backgroundColor: "#437D05"
  }


})

export default PressButton