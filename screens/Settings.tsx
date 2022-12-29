import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";

import Layout from "../components/Layout/Layout";

// so the idea is this i guess, you open the settings page by
// long pressing the = button in the calculator.
// surprise surprise the settings page is a modal
// in the modal, you can pick a certain contact from your contacts,
// and their number will be used as the output in the calculator.

export default function SettingsPage() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>Title I guess?</Text>
            </View>
        </SafeAreaView>
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

    title: {
        color: "white",
    },
});