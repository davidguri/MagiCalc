import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import Layout from "./components/Layout/Layout";
import SettingsPage from "./screens/Settings";

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

// the idea is that you input shit into the calculator and then, when you press the
// = sign, it outputs the number of that person

export default function App() {
  const outputNumberHandler = () => {
    // set the output prop to the selected phone number
  };

  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(false);

  const toggleSettingsModalHandler = () => {
    setIsOpenSettingsModal(!isOpenSettingsModal);
  };

  var phoneNumber = "069 527 1172";

  const [isOutputValue, setIsOutputValue] = useState("0");

  const numberOutputValue = () => {
    setIsOutputValue(phoneNumber)
  };

  const zeroOutputValue = () => {
    setIsOutputValue("0")
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.topContainer, styles.bodyCont]}>
        <Layout />
        <View style={styles.ioBox}>
          <Text style={styles.ioText}>{isOutputValue}</Text>
        </View>
      </View>
      <View style={[styles.bottomContainer, styles.bodyCont]}>
        <View style={styles.gridContainer}>
          <Row>
            <TouchableOpacity onPress={zeroOutputValue} style={[styles.btn]}>
              <Text style={styles.operatorText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.operatorText}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.operatorText}>DEL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.operatorText}>/</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.numText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.numText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.numText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.operatorText}>x</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.numText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.numText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.numText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.operatorText}>-</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.numText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.numText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.numText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={[styles.btn]}>
              <Text style={styles.operatorText}>+</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity onPress={() => { }} style={[styles.btn, styles.largeBtn]}>
              <Text style={styles.numText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={numberOutputValue} onLongPress={toggleSettingsModalHandler} style={[styles.btn]}>
              <Text style={styles.operatorText}>=</Text>
            </TouchableOpacity>
          </Row>
        </View>
      </View>
      <SettingsPage visible={isOpenSettingsModal} onCancel={toggleSettingsModalHandler} />
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
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  largeBtn: {
    flex: 3,
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

  bodyCont: {
    width: "100%",
  },

  topContainer: {
    flex: 0.415,
    paddingHorizontal: 20,
  },

  bottomContainer: {
    flex: 0.585,
    display: "flex",
    borderTopWidth: 4,
    borderTopColor: "#4fffe3",
    marginBottom: 5,
  },

  ioBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },

  ioText: {
    color: "white",
    fontSize: 60,
    fontWeight: "400",
  },
});
