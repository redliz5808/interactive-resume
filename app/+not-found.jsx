import AppStyles from "@/app/styles";
import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View style={AppStyles.notFoundContainer}>
                <Link href="/" style={AppStyles.notFoundButton}>
                    Go back to Home screen!
                </Link>
            </View>
        </>
    );
}

export default NotFoundScreen;