import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import SearchIcon from './Icons/SearchIcon';
import SettingsIcon from './Icons/SettingsIcon';
import SearchContext from '../context/search/';

const Search = () => {
    const [query, setQuery] = useState<string>('');
    const { setState: setGlobalState, state } = useContext(SearchContext);
    const handleSearch = (e:Event)=>{
      
        setQuery(String(e?.target?.value));
        setGlobalState({
            ...state,
            query:String(e?.target?.value),
        });
        console.log(e?.target?.value);
        
    }
    const handleSubmit = (e:Event)=>{
        setGlobalState({query});
    }
    return (        
        <View style={styles.searchContainer}>
            <SearchIcon />

            <TextInput
                placeholder="Pesquise um local"
                style={styles.input}       
                onChange={(e)=>handleSearch(e)}
                value={query}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    searchContainer: {
        height: 45,
        backgroundColor: '#DEDEDE',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },    
    input: {
        height: 24,
        width:'80%'
    },
});

export default Search;