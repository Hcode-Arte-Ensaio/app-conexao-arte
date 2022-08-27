import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TitleHome from '../components/Home/TitleHome';
import Places from '../components/Places/Places';
import Search from '../components/Search';
import placeImages from '../consts/placeImages';
import { usePlaces } from '../context/PlacesContext';
import { IPlace } from '../interfaces/IPlace';
import styled from 'styled-components/native';

const Wrap = styled.View`
  padding-bottom: 20px;
`;

const getRandom = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};
const HomeScreen = ({ navigation }) => {
  const { places, placesFavorites, filter, categoryId } = usePlaces();
  const [placeLocal, setPlaceLocal] = useState<IPlace>();
  const [destak, setDestak] = useState<Number>(0);
  const img = placeImages.find((item) => Number(item.id) === Number(destak))
    ?.image as ImageSourcePropType;

  useEffect(() => {
    setDestak(getRandom(2, 10));
    setPlaceLocal(places.find((item) => Number(item.id) === Number(destak)));
  }, [destak]);

  return (
    <ScrollView>
      <Wrap style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.title}>
          <TitleHome title="Descubra" subtitle="lugares incríveis" />
        </View>
        <View style={styles.search}>
          <Search />
        </View>

        {destak && filter.length === 0 ? (
          <View style={styles.destakPlaces}>
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.navigate('Place' as never, placeLocal as never)
              }
            >
              <View style={styles.destakPlacesInside}>
                <Image
                  source={img}
                  style={styles.destak}
                  resizeMethod="resize"
                  resizeMode="cover"
                />
                {destak ? <Text style={h1}>{placeLocal?.name}</Text> : null}
              </View>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={styles.places}>
          <Places
            title="Locais populares"
            data={places
              .filter((place) =>
                categoryId > 0 ? place.categoryId.includes(categoryId) : true
              )
              .filter((place) => {
                return filter.length > 0
                  ? place.name.toLowerCase().includes(filter.toLowerCase()) ||
                      place.description
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                  : true;
              })}
          />
        </View>
        {placesFavorites.length > 0 && (
          <View style={styles.favorites}>
            <Places
              title="Meus locais favoritos"
              data={placesFavorites
                .filter((place) =>
                  categoryId > 0 ? place.categoryId.includes(categoryId) : true
                )
                .filter((place) => {
                  return filter.length > 0
                    ? place.name.toLowerCase().includes(filter.toLowerCase()) ||
                        place.description
                          .toLowerCase()
                          .includes(filter.toLowerCase())
                    : true;
                })}
            />
          </View>
        )}
        <StatusBar style="auto" />
      </Wrap>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
    width: '100%',
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    top: 5,
    right: 20,
  },
  container: {
    position: 'relative',
    paddingTop: 25,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    width: '100%',
    flex: 1,
    minHeight: 100,
    paddingLeft: 30,
    paddingRight: 30,
  },
  titleDestak: {
    width: '100%',
    flex: 1,
    minHeight: 50,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 30,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  search: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontSize: 20,
  },
  destak: {
    width: '100%',
    height: 300,
    borderRadius: 25,
  },
  places: {
    width: '100%',
    flex: 4,
  },
  destakPlaces: {
    width: '85%',
    flex: 1,
    marginLeft: '8%',
    marginTop: '5%',
  },
  destakPlacesInside: {
    width: '100%',
    flex: 1,
  },
  favorites: {
    width: '100%',
    flex: 4,
  },
});
const h1 = StyleSheet.flatten([styles.titleDestak, styles.text]);
export default HomeScreen;
