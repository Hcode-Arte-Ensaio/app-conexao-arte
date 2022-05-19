import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import placeImages from '../../consts/placeImages';
import { IPlace } from '../../interfaces/IPlace';
import FavoriteIcon from '../Icons/FavoriteIcon';
import PlaceIcon from '../Icons/PlaceIcon';

const Place = ({ place }: {
    place: IPlace
}) => {

    const navigation = useNavigation();

    const img = placeImages.find((item) => item.id === place.id)?.image as ImageSourcePropType;

    return (
        <TouchableHighlight
            style={styles.container}
            onPress={() => navigation.navigate("Place" as never, place as never)}
        >
            <View>
                <ImageBackground
                    source={img}
                    style={styles.background}
                    imageStyle={styles.backgroundBorder}
                >
                    <View style={styles.favoriteContainer}>
                        <FavoriteIcon />
                    </View>
                </ImageBackground>
                <View style={styles.descriptionContainer}>
                    <View>
                        <Text style={styles.placeName}>{place.name}</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <PlaceIcon />
                        <Text style={styles.placeLocation}>Rio de Janeiro</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )

}

const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 165,
        borderWidth: 2,
        borderColor: '#A8A4A4',
        borderRadius: 8,
        marginTop: 10,
        marginLeft: 10,
        // paddingLeft: 5,
        // paddingRight: 5,
        paddingHorizontal: 3,        
        paddingTop: 5,
        paddingBottom: 10,
    },
    background: {
        width: 100,
        height: 100,
        alignItems: 'flex-end',
    },
    backgroundBorder: {
        borderRadius: 10,
    },
    favoriteContainer: {
        width: 30,
        height: 30,
        backgroundColor: '#ffffff90',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    descriptionContainer: {
        marginTop: 10,
        marginLeft: 4,
    },
    placeName: {
        fontSize: 10,
        color: '#000',
        fontWeight: '600',
    },
    placeLocation: {
        fontSize: 10,
        color: '#BCBCBC',
    },
    locationContainer: {
        flexDirection: 'row',
        marginTop: 2,
    },
});

export default Place;