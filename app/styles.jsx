import { MuseoModerno_400Regular } from '@expo-google-fonts/museomoderno/400Regular';
import { StyleSheet } from "react-native";

export const primary = "#763AD5";
export const primaryLight = "#B596E8";
export const secondary = "#109648";
export const secondaryLight = "#18A999";
export const accent = "#8AF3FF";
export const backgroundPrimary = "#FFFFFF";
// const backgroundLight = "#18A999";
export const primaryFont = "#172A3A";
export const secondaryFamily = MuseoModerno_400Regular;

export default AppStyles = StyleSheet.create({
    body: {
        backgroundColor: primary,
        height: "100vh",
    },

    // NAV
    navImageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    navLogo: {
        maxHeight: 60,
        width: 60,
        height: 60,
        borderRadius: "50%",
    },
    navTitle: {
        color: primaryFont,
        fontSize: 36,
        fontFamily: secondaryFamily,
    },

    // PROJECT LIST
    projectListItem: {
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