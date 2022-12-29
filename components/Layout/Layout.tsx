import { StyleSheet, Text, View } from "react-native";

export default function Layout() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>MagiCalc</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 8,
    },

    title: {
        color: "white",
        fontSize: 25,
        fontWeight: "800",
    },
});