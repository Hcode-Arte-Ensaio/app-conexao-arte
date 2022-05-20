import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import TitleHome from '../components/Home/TitleHome';
import Places from '../components/Places/Places';
import Search from '../components/Search';
import { usePlaces } from '../context/PlacesContext';

const HomeScreen = ({ navigation }) => {
  const { places, placesFavorites } = usePlaces();

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
  places: {
    width: '100%',
    flex: 4,
  },
  favorites: {
    width: '100%',
    flex: 4,
  },
});

export default HomeScreen;
