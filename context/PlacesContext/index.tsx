import React, { useCallback, useEffect, useState } from 'react';
import { IPlace } from '../../interfaces/IPlace';
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

type PropsPlacesContext = {
  filter: string;
  places: IPlace[];
  placesFavorites: IPlace[];
  placesFiltred: IPlace[];
  categoryId: number;
  setFilter: (value: string) => void;
  addFavorites: (place: IPlace) => void;
  removeFavorites: (place: IPlace) => void;
  toggleFavorites: (place: IPlace) => void;
  setCategoryId: (value: number) => void;
};

const DEFAULT_VALUE = {
  filter: '',
  places: [],
  placesFavorites: [],
  placesFiltred: [],
  categoryId: 0,
  setFilter: () => {},
  addFavorites: () => {},
  removeFavorites: () => {},
  toggleFavorites: () => {},
  setCategoryId: () => {},
};

const PlacesContext = React.createContext<PropsPlacesContext>(DEFAULT_VALUE);

export const PlacesContextProvider = ({ children }) => {
  const db = getFirestore();
  const auth = getAuth();
  const [filter, setFilter] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [placesFiltred, setPlacesFiltred] = useState<IPlace[]>([]);
  const [placesFavorites, setPlacesFavorites] = useState<IPlace[]>([]);
  const [user, setUser] = useState<null | User>(null);

  const filterFunction = useCallback(
    (item) => {
      return (
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.description.toLowerCase().includes(filter.toLowerCase())
      );
    },
    [filter]
  );

  const toggleFavorites = (place: IPlace) => {
    if (placesFavorites.map((p) => p.id).includes(place.id)) {
      removeFavorites(place);
    } else {
      addFavorites(place);
    }
  };

  const addFavorites = useCallback(
    async (place: IPlace) => {
      if (user) {
        await setDoc(
          doc(db, 'users', user.uid, 'favorites', String(place.id)),
          place
        );
      }
    },
    [user]
  );

  const removeFavorites = useCallback(
    async (place: IPlace) => {
      if (user) {
        await deleteDoc(
          doc(db, 'users', user.uid, 'favorites', String(place.id))
        );
      }
    },
    [user]
  );

  useEffect(() => {
    if (filter) {
      setPlacesFiltred(places.filter(filterFunction));
    } else {
      setPlacesFiltred([...places]);
    }
  }, [filter]);

  useEffect(() => {
    if (user) {
      const unsubFavorites = onSnapshot(
        query(collection(db, 'users', user.uid, 'favorites')),
        (querySnapshot) => {
          const database: any[] = [];
          querySnapshot.forEach((doc) => database.push(doc.data()));
          setPlacesFavorites(database);
        }
      );
      return () => {
        unsubFavorites();
      };
    }
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, setUser);

    const unsubPlaces = onSnapshot(
      query(collection(db, 'places')),
      (querySnapshot) => {
        const database: any[] = [];
        querySnapshot.forEach((doc) => database.push(doc.data()));
        setPlaces(database);
      }
    );

    return () => {
      unsubPlaces();
    };
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
        placesFiltred,
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
