import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { usePlaces } from '../../context/PlacesContext';
import { IPlace } from '../../interfaces/IPlace';
import Place from './Place';

interface PlacesProps {
  title: string;
  data: IPlace[];
}

const Places = ({ title, data }: PlacesProps) => {
  const { categoryId, setCategoryId } = usePlaces();
  const [places, setPlaces] = useState<IPlace[]>([]);

  const changeCategory = (e) => {
    setCategoryId(e);
  };

  useEffect(() => setPlaces(data), [data]);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        <Pressable key={0} onPress={(e) => changeCategory(0)}>
          <Text
            style={
              categoryId == 0 ? styles.categoryActive : styles.categoryItem
            }
          >
            Todos
          </Text>
        </Pressable>
        <Pressable key={1} onPress={(e) => changeCategory(1)}>
          {() => (
            <Text
              style={
                categoryId == 1 ? styles.categoryActive : styles.categoryItem
              }
            >
              Museus
            </Text>
          )}
        </Pressable>
        <Pressable key={2} onPress={(e) => changeCategory(2)}>
          <Text
            style={
              categoryId == 2 ? styles.categoryActive : styles.categoryItem
            }
          >
            Galerias
          </Text>
        </Pressable>
        <Pressable key={3} onPress={(e) => changeCategory(3)}>
          <Text
            style={
              categoryId == 3 ? styles.categoryActive : styles.categoryItem
            }
          >
            Pontos Turísticos
          </Text>
        </Pressable>
        <Pressable key={4} onPress={(e) => changeCategory(4)}>
          <Text
            style={
              categoryId == 4 ? styles.categoryActive : styles.categoryItem
            }
          >
            Restaurantes
          </Text>
        </Pressable>
        <Pressable key={5} onPress={(e) => changeCategory(5)}>
          <Text
            style={
              categoryId == 5 ? styles.categoryActive : styles.categoryItem
            }
          >
            Estádios de Futebol
          </Text>
        </Pressable>
        <Pressable key={6} onPress={(e) => changeCategory(6)}>
          <Text
            style={
              categoryId == 5 ? styles.categoryActive : styles.categoryItem
            }
          >
            Bibliotecas
          </Text>
        </Pressable>
        <Pressable key={7} onPress={(e) => changeCategory(7)}>
          <Text
            style={
              categoryId == 5 ? styles.categoryActive : styles.categoryItem
            }
          >
            Teatros
          </Text>
        </Pressable>
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.placesView}
      >
        {places.map((item) => (
          <Place place={item} key={String(item.id)} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  placesView: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: '600',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
  },
  categoriesContainer: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  categoryItem: {
    marginLeft: 20,
    color: '#7B7A7A',
  },
  categoryActive: {
    color: '#000',
    marginLeft: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#F53636',
  },
});

export default Places;
