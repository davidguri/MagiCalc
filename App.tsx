import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import Layout from "./components/Layout/Layout";

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.topContainer, styles.bodyCont]}>
        <Layout />
        <View style={styles.ioBox}>
          <Text style={styles.ioText}>I/O</Text>
        </View>
      </View>
      <View style={[styles.bottomContainer, styles.bodyCont]}>
        <View style={styles.gridContainer}>
          <Row>
            <TouchableOpacity onPress={() => {}} style={[styles.btn]}>
              <Text style={styles.operatorText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.operatorText}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.operatorText}>DEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.operatorText}>/</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.numText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.numText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.numText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.operatorText}>x</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.numText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.numText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.numText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.operatorText}>-</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.numText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.numText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.numText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.operatorText}>+</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity style={[styles.btn, styles.largeBtn]}>
              <Text style={styles.numText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={styles.operatorText}>=</Text>
            </TouchableOpacity>
          </Row>
        </View>
      </View>
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
    flex: 0.425,
    paddingHorizontal: 20,
  },

  bottomContainer: {
    flex: 0.575,
    display: "flex",
  },

  ioBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  ioText: {
    color: "white",
    fontSize: 64,
    fontWeight: "400",
  },
});
