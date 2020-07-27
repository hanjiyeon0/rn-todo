import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Thunderstorm",
        subtitile: "Just don't go outside.",
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#808080", "#3fada8"],

        title: "Drizzle",
        subtitile: "Just don't go outside.",
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#3a7bd5", "#3a6073"],
        title: "Rain",
        subtitile: "Take your umbrella when you go outside.",
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#2C3E50", "#4CA1AF"],
        title: "Snow",
        subtitile: "Just don't go outside.",
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#BE93C5", "#7BC6CC"],

        title: "Atmosphere",
        subtitile: "Just don't go outside.",
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fceabb", "#f8b500"],

        title: "Clear",
        subtitile: "Just don't go outside.",
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#000428", "#004e92"],

        title: "Clouds",
        subtitile: "Just don't go outside.",
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"],

        title: "Haze",
        subtitile: "Just don't go outside.",
    },
    Mist: {
        iconName: "weather-windy-variant",
        gradient: ["#A1FFCE", "#FAFFD1"],

        title: "Mist",
        subtitile: "Just don't go outside.",
    },
    Dust: {
        iconName: "weather-sunset",
        gradient: ["#ffd89b", "#19547b"],

        title: "Dust",
        subtitile: "Put your mask when you go outside.",
    },
};
export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            style={styles.container}
            // Background Linear Gradient
            colors={weatherOptions[condition].gradient}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={86} color="white" />
                <Text style={styles.temp}>{temp} º</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitile}>{weatherOptions[condition].subtitile}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitile: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 10,
        alignItems: "flex-start",
    },
});
