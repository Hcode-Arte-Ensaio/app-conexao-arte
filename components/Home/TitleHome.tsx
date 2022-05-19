import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface TitleHomeProps {
    title: string;
    subtitle: string;
}

const TitleHome = (props: TitleHomeProps) => {

    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.title}>{props.subtitle}</Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        // borderWidth: 4,
        // borderColor: '#EE1111',
        flex: 1,
    },
    title: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    },
      profile: {
        width: 38,
        height: 38,
    },
});

export default TitleHome;