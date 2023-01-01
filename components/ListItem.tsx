import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";

export default function ListItem(props: any) {
    return (
        <View style={{ ...styles.listItem, ...props.style }}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: "96%",
        marginHorizontal: "2%",
        borderRadius: 25,
        backgroundColor: "#4fffe3",
        paddingVertical: 12,
        paddingHorizontal: 15,
    },
});