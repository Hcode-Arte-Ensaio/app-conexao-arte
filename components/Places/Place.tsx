import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import placeImages from '../../consts/placeImages';
import { usePlaces } from '../../context/PlacesContext';
import { IPlace } from '../../interfaces/IPlace';
import FavoriteIcon from '../Icons/FavoriteIcon';
import PlaceIcon from '../Icons/PlaceIcon';

const Place = ({ place }: { place: IPlace }) => {
  const [data, setData] = useState(place);
  const { toggleFavorites } = usePlaces();
  const navigation = useNavigation();

  const img = placeImages.find((item) => item.id === place.id)
    ?.image as ImageSourcePropType;

  useEffect(() => setData(place), [place]);

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => navigation.navigate('Place' as never, data as never)}
    >
      <View>
        <ImageBackground
          source={img}
          style={styles.background}
          imageStyle={styles.backgroundBorder}
        >
          <TouchableHighlight
            style={styles.favoriteContainer}
            underlayColor={'#eee'}
            onPress={() => {
              setData((data) => ({
                ...data,
                favorite: !data.favorite,
              }));
              toggleFavorites(data);
            }}
          >
            <FavoriteIcon
              width="24"
              height="24"
              color={data.favorite ? '#ff0000' : '#6C6C6C'}
            />
          </TouchableHighlight>
        </ImageBackground>
        <View style={styles.descriptionContainer}>
          <View>
            <Text style={styles.placeName}>{data.name}</Text>
          </View>
          <View style={styles.locationContainer}>
            <PlaceIcon />
            <Text style={styles.placeLocation}>{data.address}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 165,
    borderWidth: 2,
    borderColor: '#A8A4A4',
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 15,
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
    width: '90%',
    height: 10,
    overflow: 'hidden',
    fontSize: 10,
    color: '#BCBCBC',
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 2,
  },
});

export default Place;
