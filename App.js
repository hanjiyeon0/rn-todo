import React, { Component } from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "1e5b61268faa07cf165fd31a5807e429";

export default class App extends Component {
    state = {
        is_loading: true,
    };
    getWeather = async (lat, long) => {
        const {
            data: {
                main: { temp },
                weather,
            },
        } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=metric`,
        );
        this.setState({
            temp,
            condition: weather[0].main,
            is_loading: false,
        });
    };
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
        } catch (e) {
            Alert.alert("Can't find you.", "So sad");
        }
    };
    componentDidMount() {
        this.getLocation();
    }
    render() {
        const { is_loading, temp, condition } = this.state;
        return is_loading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
    }
}
