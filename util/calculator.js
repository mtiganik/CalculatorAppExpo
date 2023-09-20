
const initialVals = {
  currString: "11",
  result: "111"
}


const Calculate = (currentState, addedChar) => {

  return [currentState + addedChar, addedChar +1]
  
  // const currState = currentState.currString
  // console.log(currentState)
  // alert("CurrentState: " + {currentState} + " added char: " + addedChar )
  return toReturn(currentState + "addedChar", addedChar +1)
  // return({...currentState, currString: initialVals.currString, result: initialVals.result})
  // if(addedChar === "C"){
  //   return toReturn("", "")

  // } 
  // if(addedChar === "d"){
  //   alert("TODO")
  //   return toReturn(" ", " ")
  // }
/*
  try {
    currentState.currString = currentState.currString + addedChar
    // Attempt to evaluate the input as a mathematical expression
    const calculatedResult = eval(currentState.currString);

    // Check if the result is a finite number
    if (Number.isFinite(calculatedResult)) {
      return toReturn(currentState, calculatedResult)
    } else {
      toReturn(currentState, "");
    }
  } catch (error) {
    toReturn(currentState, "");
  }
*/
return initialVals
}

const toReturn= (currString, result) => {
  return [currString,result]
  
 
}
export default Calculate