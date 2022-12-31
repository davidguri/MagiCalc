import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Button,
    TextInput,
} from "react-native";
import Modal from "react-native-modal"
import Contacts from "react-native-contacts";
import Ionicons from '@expo/vector-icons/Ionicons';

// so the idea is this i guess, you open the settings page by
// long pressing the = button in the calculator.
// surprise surprise the settings page is a modal
// in the modal, you can search for a certain contact from your contacts,
// and their number will be used as the output in the calculator.

export default function SettingsPage(props) {
    var searchText = "Search..."
    return (
        <Modal
            isVisible={props.visible}
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}
            style={{ margin: 0 }}
            hideModalContentWhileAnimating={true}
        >
            <SafeAreaView style={styles.container}>
                <StatusBar style="light" />
                <View style={styles.bodyContainer}>
                    <View style={styles.topContainer}>
                        <Button title="Done" color="#4fffe3" onPress={props.onCancel} />
                        <View style={styles.searchCont}>
                            <Ionicons name="search-outline" size={18} color="#aaa" />
                            <TextInput style={styles.searchText} keyboardAppearance="dark" value={searchText} onFocus={() => searchText = ""} />
                        </View>
                    </View>
                    <View style={styles.bottomContainer}></View>
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
        borderColor: "red",
        borderWidth: 2,
        paddingBottom: 15,
    },

    bottomContainer: {
        borderColor: "green",
        borderWidth: 2,
        flex: 1,
    },

    button: {},

    searchCont: {
        borderColor: "#4fffe3",
        borderWidth: 4,
        borderRadius: 25,
        width: "95%",
        marginHorizontal: "2.5%",
        marginVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },

    searchText: {
        color: "#aaa",
        fontSize: 18,
        paddingVertical: 12,
        paddingHorizontal: 6,
    },
});