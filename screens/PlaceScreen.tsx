import React, { Fragment, useEffect, useState } from 'react';
import { Dimensions, ImageSourcePropType, Platform } from 'react-native';
import placeImages from '../consts/placeImages';
import { usePlaces } from '../context/PlacesContext';
import { IPlace } from '../interfaces/IPlace';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Wrap = styled.View`
  position: relative;
  flex: 1;
`;

const WrapScrollView = styled.ScrollView``;

const CoverWrap = styled.View`
  height: ${Dimensions.get('window').height / 3}px;
  width: 100%;
  position: relative;
`;
const Cover = styled.Image`
  position: absolute;
  height: ${Dimensions.get('window').height / 3}px;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 32px;
  padding: 15px;
`;

const Description = styled.Text`
  font-size: 14px;
  padding: 0 15px;
  text-align: justify;
`;

const Gallery = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 15px;
  margin-bottom: 110px;
`;

const GalleryItem = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width / 3}px;
  height: ${Dimensions.get('window').width / 3}px;
`;

const GalleryImage = styled.Image`
  width: ${Dimensions.get('window').width / 3}px;
  height: ${Dimensions.get('window').width / 3}px;
`;

const Toolbar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding: 15px;
`;

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 32px;
`;

const AddPhotoButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 15px;
  left: ${Dimensions.get('window').width / 2 - 38}px;
  background-color: #2ecc71cc;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 48px;
`;

const ClosePhotoButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 15px;
  left: ${Dimensions.get('window').width / 2 - 38}px;
  background-color: #e74c3ccc;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 48px;
`;

const Modal = styled.View`
  background-color: #000000cc;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  padding-bottom: 100px;
`;

const ModalButton = styled.TouchableOpacity`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

const PlaceScreen = ({
  route,
  navigation,
}: {
  route: {
    params: IPlace;
  };
  navigation: any;
}) => {
  const [modal, setModal] = useState(false);
  const [place, setPlace] = useState(route.params);
  const { toggleFavorites } = usePlaces();

  const img = placeImages.find((item) => item.id === place.id)
    ?.image as ImageSourcePropType;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result.uri);
    }
  };

  const pickCamera = async () => {
    console.log('pickCamera');
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result.uri);
    }
  };

  const checkPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  useEffect(() => {
    setPlace(route.params);
    checkPermissions();
  }, [route]);

  return (
    <Wrap>
      <WrapScrollView>
        <StatusBar backgroundColor="#00000066" style="light" />
        <CoverWrap>
          <Cover source={img} />
          <Toolbar>
            <Button onPress={() => navigation.navigate('Home')}>
              <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            </Button>
            <Button
              onPress={() => {
                toggleFavorites(place);
                place.favorite = !place.favorite;
              }}
            >
              {!place.favorite ? (
                <MaterialIcons name="favorite-border" size={24} color="black" />
              ) : (
                <MaterialIcons name="favorite" size={24} color="red" />
              )}
            </Button>
          </Toolbar>
        </CoverWrap>
        <Title>{place.name}</Title>
        <Description>{place.description}</Description>
        <Gallery>
          <GalleryItem>
            <GalleryImage source={img} />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage source={img} />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage source={img} />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage source={img} />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage source={img} />
          </GalleryItem>
        </Gallery>
      </WrapScrollView>
      {modal && (
        <Fragment>
          <Modal>
            <ModalButton onPress={() => setModal(false)}>
              <MaterialIcons name="camera-alt" size={64} color="white" />
              <ModalButtonText>Câmera</ModalButtonText>
            </ModalButton>
            <ModalButton
              onPress={() => {
                pickImage();
                setModal(false);
              }}
            >
              <MaterialIcons name="image" size={64} color="white" />
              <ModalButtonText>Galeria</ModalButtonText>
            </ModalButton>
          </Modal>
          <ClosePhotoButton
            onPress={() => {
              pickCamera();
              setModal(false);
            }}
          >
            <MaterialIcons name="close" size={32} color="white" />
          </ClosePhotoButton>
        </Fragment>
      )}
      {!modal && (
        <AddPhotoButton onPress={() => setModal(true)}>
          <MaterialIcons name="add-a-photo" size={32} color="white" />
        </AddPhotoButton>
      )}
    </Wrap>
  );
};

export default PlaceScreen;
