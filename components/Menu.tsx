import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeIcon from './Icons/HomeIcon';
import PersonIcon from './Icons/PersonIcon';
import PlayIcon from './Icons/PlayIcon';
import SearchIcon from './Icons/SearchIcon';

const Menu = () => {

    return (
        <View style={styles.menuContainer}>
            <View style={styles.menuItem}>
                <HomeIcon />
                <View style={[styles.ball, styles.active]} />
            </View>
            <View style={styles.menuItem}>
                <PlayIcon />
                <View style={styles.ball} />
            </View>
            <View style={styles.menuItem}>
                <SearchIcon />
                <View style={[styles.ball]} />
            </View>
           
        </View>   
    )

}

const styles = StyleSheet.create({
    menuContainer: {
        width: '85%',
        height: 50,
        backgroundColor: '#2F2F2F',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        marginBottom: 20,
    },
    menuItem: {
        alignItems: 'center',
        height: 28,
    },
    ball: {
        width: 4,
        height: 4,
        backgroundColor: '#fff',
        borderRadius: 2,
        display: 'none',
    },
    active: {
        display: 'flex',
    },
});

export default Menu;