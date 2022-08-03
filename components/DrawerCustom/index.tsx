import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import logo from '../../assets/conexao-cor.png';
import { View } from 'react-native';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DrawerCustom = (props) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.wrap}>
        <TouchableHighlight
          style={styles.close}
          onPress={() => navigation.closeDrawer()}
          underlayColor={'rgba(0,0,0,.1)'}
        >
          <MaterialIcons name="close" size={32} color={'#000'} />
        </TouchableHighlight>
        <View style={styles.menu}>
          <DrawerItem
            label="Home"
            onPress={() => navigation.navigate('Main' as never)}
            labelStyle={styles.item}
          />
          <DrawerItem
            label="Lugares"
            onPress={() => navigation.navigate('Home' as never)}
            labelStyle={styles.item}
          />
        </View>
        <Image source={logo} style={styles.logo} />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerCustom;

const styles = StyleSheet.create({
  close: {
    padding: 10,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 5,
    right: 20,
  },
  wrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.get('window').height - 50,
  },
  menu: {
    flex: 1,
    width: '100%',
    top: 50,
  },
  item: {
    padding: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  logo: {
    marginBottom: 20,
    marginTop: 20,
  },
});
