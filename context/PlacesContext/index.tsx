import React, { useCallback, useEffect, useState } from 'react';
import { IPlace } from '../../interfaces/IPlace';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { places as database } from '../../data/index';

type PropsPlacesContext = {
  filter: string;
  setFilter: (value: string) => void;
  places: IPlace[];
  placesFavorites: IPlace[];
  addFavorites: (place: IPlace) => void;
  removeFavorites: (place: IPlace) => void;
  setData: (places: IPlace[]) => void;
  toggleFavorites: (place: IPlace) => void;
  categoryId: number;
  setCategoryId: (value: number) => void;
};

const DEFAULT_VALUE = {
  filter: '',
  setFilter: () => {},
  places: [],
  placesFavorites: [],
  addFavorites: () => {},
  removeFavorites: () => {},
  setData: () => {},
  toggleFavorites: () => {},
  categoryId: 0,
  setCategoryId: () => {},
};

const PlacesContext = React.createContext<PropsPlacesContext>(DEFAULT_VALUE);

export const PlacesContextProvider: React.FC = ({ children }) => {
  const [filter, setFilter] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [allPlaces, setAllPlaces] = useState<IPlace[]>([]);
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [placesFavorites, setPlacesFavorites] = useState<IPlace[]>([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('places');

      if (value !== null) {
        const places = JSON.parse(value) as IPlace[];
        if (places.length) {
          setAllPlaces(places);
        }

        return true;
      } else {
        throw new Error('Empty JSON');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const setData = async (items: IPlace[]) => {
    try {
      await AsyncStorage.setItem('places', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
    return true;
  };

  const filterFunction = useCallback(
    (item) => {
      return (
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.description.toLowerCase().includes(filter.toLowerCase())
      );
    },
    [filter]
  );

  const initAllPlaces = useCallback(() => {
    setPlaces(allPlaces);
    setPlacesFavorites(allPlaces.filter((item) => item.favorite));
  }, [allPlaces]);

  const toggleFavorites = (place: IPlace) => {
    if (place.favorite) {
      removeFavorites(place);
    } else {
      addFavorites(place);
    }
  };

  const addFavorites = (place: IPlace) => {
    const newPlaces = allPlaces.map((i) =>
      i.id === place.id ? { ...i, favorite: true } : i
    );

    setAllPlaces([...newPlaces]);
    setData([...newPlaces]);
  };

  const removeFavorites = (place: IPlace) => {
    const newPlaces = allPlaces.map((i) =>
      i.id === place.id ? { ...i, favorite: false } : i
    );

    setAllPlaces(newPlaces);
    setData(newPlaces);
  };

  useEffect(() => {
    
    if (filter) {
      setPlaces((items) => items.filter(filterFunction));
      setPlacesFavorites((items) => items.filter(filterFunction));
    } else {
      initAllPlaces();
    }
  }, [filter]);

  useEffect(initAllPlaces, [allPlaces]);

  useEffect(() => {
    if (categoryId === 0) {
      initAllPlaces();
    } else {
      setPlaces(
        allPlaces.filter((item) => item.categoryId.includes(categoryId))
      );
      setPlacesFavorites(
        allPlaces
          .filter((item) => item.favorite)
          .filter((item) => item.categoryId.includes(categoryId))
      );
    }
  }, [categoryId]);

  useEffect(() => {
    setData(database)
      .then(() => getData())
      .then(() => {})
      .catch(console.error);
  }, []);

  return (
    <PlacesContext.Provider
      value={{
        filter,
        setFilter,
        places,
        placesFavorites,
        addFavorites,
        removeFavorites,
        setData,
        toggleFavorites,
        categoryId,
        setCategoryId,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesContext;

export function usePlaces() {
  const context = React.useContext(PlacesContext);

  if (context === undefined) {
    throw new Error(`usePlaces must be used within a PlacesContextProvider`);
  }

  return context;
}
