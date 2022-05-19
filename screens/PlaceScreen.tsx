import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { ImageBackground, ImageSourcePropType, Linking, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import BackIcon from '../components/Icons/BackIcon';
import FavoriteIcon from '../components/Icons/FavoriteIcon';
import ForwardIcon from '../components/Icons/ForwardIcon';
import placeImages from '../consts/placeImages';
import { IPlace } from '../interfaces/IPlace';

const PlaceScreen = ({ route }: {
    route: {
        params: IPlace
    }
}) => {

    const navigation = useNavigation();

    const values = route.params;

    const img = placeImages.find((item) => item.id === values.id)?.image as ImageSourcePropType;

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <ImageBackground
                    source={img}
                    style={styles.backgroundImage}
                    imageStyle={styles.backgroundBorder}
                >
                    <View style={styles.linksContainer}>
                        <TouchableHighlight
                            style={styles.iconContainer}
                            onPress={() => navigation.goBack()}
                        >
                            <BackIcon />
                        </TouchableHighlight>
                        <View style={styles.iconContainer}>
                            <FavoriteIcon
                                width="24"
                                height="24"
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.textContainer}>
                <View style={styles.place}>
                    <Text style={styles.placeName}>{values.name}</Text>
                    <Text style={styles.placeTicket}>{values.ticket}</Text>
                </View>
                <View style={styles.placeDescription}>
                    <Text style={styles.description}>{values.description}</Text>
                </View>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => Linking.openURL(values.site)}
                >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Visite o Rio</Text>
                        <ForwardIcon />
                    </View>
                </TouchableHighlight>
            </View>            
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 80,
        paddingHorizontal: 30,
        backgroundColor: '#325693',
        flex: 1,
        color:'#fff',        
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // borderWidth: 4,
    },
    background: {
        width: '100%',
    },
    backgroundImage: {
        width: '100%',
        height: 400,
    },
    backgroundBorder: {
        borderRadius: 40,
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        paddingHorizontal: 10,
        width: '100%',
        justifyContent: 'space-between',
    },
    place: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    placeName: {
        width: '100%',
        fontSize: 18,
        fontWeight: '600',
        maxWidth: 300, color:'#fff',
    },
    placeTicket: {
        fontSize: 13,
        fontWeight: '600',
    },
    placeDescription: { 
        color:'#fff',
        width: '105%',
        // borderWidth: 4,
        // borderColor: '#B8EA78',
        // paddingHorizontal: 20,
        height: 270,
        justifyContent: 'flex-start',
        marginBottom:'2%',
        marginTop:'2%'
    },
    description: {
        fontSize: 13,
        fontWeight: '200',
        maxWidth: 320,
        color:'#e9e9e9',
    },
    button: {
        width: '100%',
        // borderWidth: 4,
        // borderColor: '#AA78EA',
        height: 50,
        borderRadius: 40,
        backgroundColor: '#2F2F2F',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        height: 24,
    },
});

export default PlaceScreen;