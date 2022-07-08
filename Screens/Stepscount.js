import {SafeAreaView, Text, StyleSheet} from "react-native";
import { Pedometer } from 'expo-sensors';


export function Stepscount() {
    let state = {
        isPedometerAvailable: 'checking',
        pastStepCount: 0,
        currentStepCount: 0,
    };

    function componentDidMount() {
        _subscribe();
    }

    function componentWillUnmount() {
        this._unsubscribe();
    }

    let _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
            setState({
                currentStepCount: result.steps,
            });
        });

        Pedometer.isAvailableAsync().then(
            result => {
                setState({
                    isPedometerAvailable: String(result),
                });
            },
            error => {
                setState({
                    isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
                });
            }
        );

        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);
        Pedometer.getStepCountAsync(start, end).then(
            result => {
                setState({ pastStepCount: result.steps });
            },
            error => {
                setState({
                    pastStepCount: 'Could not get stepCount: ' + error,
                });
            }
        );
    };

    let _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };
    return(
        <SafeAreaView>
            <Text>There are Steps</Text>
            <Text>Pedometer.isAvailable: {state.isPedometerAvailable}</Text>
            <Text>Steps taken in the last 24h: {state.pastStepCount}</Text>
            <Text>Walk! : {state.currentStepCount}</Text>
        </SafeAreaView>
    )
}