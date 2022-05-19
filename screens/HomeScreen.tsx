import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import TitleHome from '../components/Home/TitleHome';
import Menu from '../components/Menu';
import Places from '../components/Places/Places';
import Search from '../components/Search';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            {/* TITLE HOME */}
            <View style={styles.title}>
                <TitleHome
                    title="Descubra"
                    subtitle="lugares incríveis"            
                />
            </View>

            {/* SEARCH */}
            <View style={styles.search}>
                <Search />
            </View>

            {/* PLACES */}
            <View style={styles.places}>
                <Places
                    title="Locais populares"
                />
            </View>

            {/* FAVORITES */}
            <View style={styles.favorites}>
                <Places
                    title="Meus locais favoritos"
                    favorite={true}
                />
            </View>            

            <StatusBar style="auto" />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // borderWidth: 4,
        // borderColor: 'blue',
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        width: '100%',
        flex: 1,
    },
    search: {
        width: '100%',
        // borderWidth: 4,
        // borderColor: '#EECB11',
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
    places: {
        width: '100%',
        // borderWidth: 4,
        // borderColor: '#5FE70C',
        flex: 4,
    },
    favorites: {
        width: '100%',
        // borderWidth: 4,
        // borderColor: '#CF97EA',
        flex: 4,
    },    
});

export default HomeScreen;