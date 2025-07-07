import { StyleSheet } from "react-native";

const primary = "#763AD5";
const primaryLight = "#B596E8";
const secondary = "#109648";
const secondaryLight = "#18A999";
const accent = "#8AF3FF";
const backgroundPrimary = "#FFFFFF";
// const backgroundLight = "#18A999";

const AppStyles = StyleSheet.create({
    body: {
        backgroundColor: primary,
        height: "100vh",
    },
    projectList: {
        listStyle: "disc",
        color: accent,
    },

    // NOT FOUND SCREEN
    notFoundContainer: {
        flex: 1,
        backgroundColor: backgroundPrimary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notFoundButton: {
        fontSize: 24,
        color: primary,
    },
});

export default AppStyles;