import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import TitleHome from '../components/Home/TitleHome';
import Places from '../components/Places/Places';
import Search from '../components/Search';
import placeImages from '../consts/placeImages';
import { usePlaces } from '../context/PlacesContext';
import { IPlace } from '../interfaces/IPlace';



const HomeScreen = ({ navigation}) => {
  const { places, placesFavorites } = usePlaces();


  const destak = parseInt(Math.random() * (20 - 1) + 1);
  const img = placeImages.find((item) => item.id === destak)
    ?.image as ImageSourcePropType;

    const data = places.find((item) => item.id === destak);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight
            style={styles.menu}
            onPress={() => navigation.toggleDrawer()}
            underlayColor={'rgba(255,255,255,.1)'}
          >
            <MaterialIcons name="menu" size={32} color={'#000000'} />
          </TouchableHighlight>
        </View>
        <View style={styles.title}>
          <TitleHome title="Descubra" subtitle="lugares incríveis" />
        </View>
        <View style={styles.search}>
          <Search />
        </View>

  {places &&      <View style={styles.destakPlaces}>
                      <TouchableHighlight
      style={styles.container}
      onPress={() => navigation.navigate('Place' as never, data as never)}
    >
       <View style={styles.destakPlacesInside}>
          <Image
            source={img}
            style={styles.destak}
            resizeMethod="resize"
            resizeMode="cover"
          />
          {places[destak-1] &&<Text style={h1}>{places[destak]?.name}</Text>}
          </View>
        </TouchableHighlight>
        </View>}

        <View style={styles.places}>
          <Places title="Locais populares" data={places} />
        </View>
        <View style={styles.favorites}>
          <Places title="Meus locais favoritos" data={placesFavorites} />
        </View>
        <StatusBar style="auto" />
      </View>
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
    paddingTop:10,
    fontWeight: 'bold'
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
const h1 = StyleSheet.flatten([
    styles.titleDestak,
    styles.text,    
])
export default HomeScreen;
