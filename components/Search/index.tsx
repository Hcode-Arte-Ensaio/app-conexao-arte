import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import SearchIcon from '../Icons/SearchIcon';
import { usePlaces } from '../../context/PlacesContext';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  background-color: #dedede;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const IconView = styled.View`
  width: 42px;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 40px;
  flex: 1;
`;

const Search = () => {
  const [focus, setFocus] = useState(false);
  const { filter, setFilter } = usePlaces();

  return (
    <SearchContainer style={focus ? styles.focused : {}}>
      <IconView>
        <SearchIcon />
      </IconView>
      <SearchInput
        placeholder="Pesquise um local"
        onChangeText={(text) => {
          setFilter(text);
        }}
        value={filter}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </SearchContainer>
  );
};

const styles = StyleSheet.create({
  focused: {
    backgroundColor: '#eee',
  },
});

export default Search;
