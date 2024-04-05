import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
   StyleSheet,
   Text,
   View,
   SafeAreaView,
   TouchableOpacity,
   TextInput,
} from "react-native";

import Layout from "./components/Layout/Layout";
import SettingsPage from "./screens/Settings";

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

export default function App() {
   const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(false);

   // modal stuff
   const toggleSettingsModalHandler = () => {
      setIsOpenSettingsModal(!isOpenSettingsModal);
   };
   // output stuff
   const [phoneNumber, setPhoneNumber] = useState("355 69 527 1172"); // this value shouldn't be hardcoded, but I'm too lazy to fix it rn

   const newPhoneNumber = (data: string) => {
      setPhoneNumber(data);
   }

   const [isOutputValue, setIsOutputValue] = useState("0");
   const [isInputValue, setIsInputValue] = useState("");

   const numberOutputValue = () => {
      setIsOutputValue(phoneNumber);
   };

   const zeroValue = () => {
      setIsOutputValue("0")
      setIsInputValue("")
   };

   // input stuff

   function addNumber(x: string) {
      setIsInputValue(isInputValue + x)
   };

   function addSymbol(y: string) {
      setIsInputValue(isInputValue + y)
   };

   function deleteCharacter(z: string) {
      setIsInputValue(z.slice(0, -1))
   }

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar style="light" />
         <View style={[styles.topContainer, styles.bodyCont]}>
            <Layout />
            <View style={styles.ioBox}>
               <TextInput style={styles.inputText} value={isInputValue} />
               <TextInput style={styles.outputText} value={isOutputValue} />
            </View>
         </View>
         <View style={[styles.bottomContainer, styles.bodyCont]}>
            <View style={styles.gridContainer}>

               <Row>
                  <TouchableOpacity onPress={zeroValue} style={[styles.btn, styles.mediumBtn]}>
                     <Text style={styles.operatorText}>AC</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteCharacter(isInputValue)} style={[styles.btn]}>
                     <Text style={styles.operatorText}>&larr;</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addSymbol(" / ")} style={[styles.btn]}>
                     <Text style={styles.operatorText}>&divide;</Text>
                  </TouchableOpacity>
               </Row>

               <Row>
                  <TouchableOpacity onPress={() => addNumber("1")} style={[styles.btn]}>
                     <Text style={styles.numText}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addNumber("2")} style={[styles.btn]}>
                     <Text style={styles.numText}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addNumber("3")} style={[styles.btn]}>
                     <Text style={styles.numText}>3</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addSymbol(" x ")} style={[styles.btn]}>
                     <Text style={styles.operatorText}>x</Text>
                  </TouchableOpacity>
               </Row>

               <Row>
                  <TouchableOpacity onPress={() => addNumber("4")} style={[styles.btn]}>
                     <Text style={styles.numText}>4</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addNumber("5")} style={[styles.btn]}>
                     <Text style={styles.numText}>5</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addNumber("6")} style={[styles.btn]}>
                     <Text style={styles.numText}>6</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addSymbol(" - ")} style={[styles.btn]}>
                     <Text style={styles.operatorText}>-</Text>
                  </TouchableOpacity>
               </Row>

               <Row>
                  <TouchableOpacity onPress={() => addNumber("7")} style={[styles.btn]}>
                     <Text style={styles.numText}>7</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addNumber("8")} style={[styles.btn]}>
                     <Text style={styles.numText}>8</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addNumber("9")} style={[styles.btn]}>
                     <Text style={styles.numText}>9</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addSymbol(" + ")} style={[styles.btn]}>
                     <Text style={styles.operatorText}>+</Text>
                  </TouchableOpacity>
               </Row>

               <Row>
                  <TouchableOpacity onPress={() => addNumber("0")} style={[styles.btn, styles.mediumBtn]}>
                     <Text style={styles.numText}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={numberOutputValue} onLongPress={toggleSettingsModalHandler} style={[styles.btn, styles.equalBtn]}>
                     <Text style={styles.equalText}>=</Text>
                  </TouchableOpacity>
               </Row>
            </View>
         </View>
         <SettingsPage visible={isOpenSettingsModal} onCancel={toggleSettingsModalHandler} number={phoneNumber} updateNumber={newPhoneNumber} />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#000",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
   },

   gridContainer: {
      flex: 1,
      flexDirection: "column",
      marginHorizontal: "auto",
      justifyContent: "space-evenly",
      alignItems: "center",
   },

   row: {
      flexDirection: "row",
      flex: 1,
   },

   btn: {
      backgroundColor: "#000",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },

   mediumBtn: {
      flex: 2,
   },

   largeBtn: {
      flex: 3,
   },

   equalBtn: {
      backgroundColor: "#4fffe3",
      margin: 10,
      flex: 1.8,
      borderRadius: 25,
   },

   numText: {
      color: "white",
      fontSize: 30,
      fontWeight: "600",
   },

   operatorText: {
      color: "#4fffe3",
      fontSize: 30,
      fontWeight: "600",
   },

   equalText: {
      color: "black",
      fontSize: 30,
      fontWeight: "600",
   },

   bodyCont: {
      width: "100%",
   },

   topContainer: {
      flex: 0.42,
      paddingHorizontal: 20,
   },

   bottomContainer: {
      flex: 0.58,
      display: "flex",
      borderTopWidth: 4,
      borderTopColor: "#4fffe3",
      marginBottom: 5,
   },

   ioBox: {
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "space-around",
      width: "100%",
      marginBottom: 5,
   },

   outputText: {
      color: "white",
      fontSize: 58,
      fontWeight: "400",
   },

   inputText: {
      color: "#444",
      fontSize: 30,
      fontWeight: "300",
   },
});