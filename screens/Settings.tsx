import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
   StyleSheet,
   Text,
   View,
   ScrollView,
   Keyboard,
   SafeAreaView,
   TouchableOpacity,
   Button,
   TextInput,
} from "react-native";
import Modal from "react-native-modal";
import ListItem from "../components/ListItem";

import Ionicons from '@expo/vector-icons/Ionicons';

// so the idea is this i guess, you open the settings page by
// long pressing the = button in the calculator.
// surprise surprise the settings page is a modal
// in the modal, you can search for a certain contact from your contacts,
// and their number will be used as the output in the calculator.

export default function SettingsPage(props: any) {
   const [number, setNumber] = useState("New Number...");

   return (
      <Modal
         isVisible={props.visible}
         animationIn={"slideInUp"}
         animationOut={"slideOutDown"}
         style={{ margin: 0 }}
         hideModalContentWhileAnimating={true}
         onBackdropPress={() => Keyboard.dismiss()}
      >
         <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.bodyContainer}>
               <View style={styles.topContainer}>
                  <Button title="Done" color="#4fffe3" onPress={props.onCancel} />
               </View>
               <View style={styles.bottomContainer}>
                  <Text style={{ color: "white", marginBottom: 20, fontSize: 21, fontWeight: "900" }}>Current Phone Number: {props.number}</Text>
                  <TextInput style={{ color: "white", marginBottom: 20, borderColor: "#4fffe3", borderWidth: 3.2, borderRadius: 20, width: "80%", paddingVertical: 10, paddingLeft: 15 }} keyboardAppearance="dark" value={number} onFocus={() => setNumber("")} onChangeText={setNumber} />
                  <TouchableOpacity onPress={() => props.updateNumber(number)}>
                     <Text style={{ color: "#4fffe3", fontWeight: "900", fontSize: 16 }}>Submit</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </SafeAreaView>
      </Modal>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#000",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
   },

   bodyContainer: {
      flex: 1,
      width: "100%",
   },

   topContainer: {
      paddingBottom: 15,
   },

   bottomContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
});