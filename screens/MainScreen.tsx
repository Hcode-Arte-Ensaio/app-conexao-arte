import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import FadeCarousel from 'rn-fade-carousel';
import Image1 from '../assets/main/rio1.jpg';
import Image2 from '../assets/main/rio2.jpg';
import Image3 from '../assets/main/rio3.jpg';
import Image4 from '../assets/main/rio4.jpg';
import rioCultura from '../assets/rio-cultura.png';
import conectese from '../assets/conectese.png';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const LogoWrap = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 40px;
`;

const ImageWrap = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FadeCarousel
        elements={[
          <Image
            source={Image1}
            style={styles.imageScroll}
            resizeMethod="resize"
            resizeMode="cover"
          />,
          <Image
            source={Image2}
            style={styles.imageScroll}
            resizeMethod="resize"
            resizeMode="cover"
          />,
          <Image
            source={Image3}
            style={styles.imageScroll}
            resizeMethod="resize"
            resizeMode="cover"
          />,
          <Image
            source={Image4}
            style={styles.imageScroll}
            resizeMethod="resize"
            resizeMode="cover"
          />,
        ]}
        containerStyle={styles.carouselContainer}
        fadeDuration={2000}
        stillDuration={2000}
        start={true}
      />
      <View style={styles.innerContainer}>
        <StatusBar barStyle={'light-content'} />
        <TouchableHighlight
          style={styles.menu}
          onPress={() => navigation.toggleDrawer()}
          underlayColor={'rgba(255,255,255,.1)'}
        >
          <MaterialIcons name="menu" size={32} color={'#ffffff'} />
        </TouchableHighlight>
        <LogoWrap>
          <Image source={rioCultura} />
        </LogoWrap>
        <Text style={styles.text}>
          Prefeitura do Rio de Janeiro e Secretaria Municipal de Cultura
        </Text>
        <Text style={styles.text}>Apresentam:</Text>
        <ImageWrap>
          <Image source={conectese} />
        </ImageWrap>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
          underlayColor={'rgba(255,255,255,.25)'}
        >
          <Text style={styles.buttonText}>Descubra o Rio</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 30,
    right: 20,
    padding: 10,
    width: 50,
    height: 50,
  },
  button: {
    height: 50,
    margin: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    color: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 10,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
  },
  innerContainer: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageScroll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
