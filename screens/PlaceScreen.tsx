import React, { Fragment, useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageSourcePropType,
  Platform,
} from 'react-native';
import placeImages from '../consts/placeImages';
import { usePlaces } from '../context/PlacesContext';
import { IPlace } from '../interfaces/IPlace';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
  doc,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

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

const UserPohotosTitle = styled.Text`
  font-size: 24px;
  padding: 15px;
  padding-bottom: 0;
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
  const auth = getAuth();
  const db = getFirestore();
  const [user, setUser] = useState<User | null>(null);
  const [uploading, setUploading] = useState(false);
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

    if (!result.cancelled) {
      handleImagePicked(result);
    }
  };

  const pickCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      handleImagePicked(result);
    }
  };

  async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise<Blob>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response as Blob);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const storage = getStorage();
    const name = String(uuid.v4());
    const fileRef = ref(storage, name);
    const result = await uploadBytes(fileRef, blob);

    // We're done with the blob, close and release it
    blob.close();

    return await getDownloadURL(fileRef);
  }

  const handleImagePicked = useCallback(
    async (pickerResult) => {
      try {
        setUploading(true);

        if (!pickerResult.cancelled) {
          const uploadUrl = await uploadImageAsync(pickerResult.uri);

          await addDoc(collection(db, 'places', String(place.id), 'photos'), {
            url: uploadUrl,
            created: Date.now(),
            author: {
              name: user?.displayName ?? '',
              email: user?.email ?? '',
              photoURL: user?.photoURL ?? '',
            },
          });
        }
      } catch (e) {
        console.log(e);
        alert('Upload failed, sorry :(');
      } finally {
        setUploading(false);
      }
    },
    [place, user]
  );

  const checkPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissão para este recurso!');
      }
    }
  };

  type Photo = {
    url: string;
    created: number;
    author: {
      name: string;
      email: string;
      photoURL: string;
    };
  };

  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    setPlace(route.params);
    checkPermissions();

    const q = query(
      collection(db, 'places', String(place.id), 'photos'),
      orderBy('created', 'desc'),
      limit(100)
    );

    onSnapshot(q, (querySnapshot) => {
      const items: any[] = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      console.log('photos:', items.join(', '));

      setPhotos([...items]);
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
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
        <UserPohotosTitle>Fotos dos visitantes</UserPohotosTitle>
        <Gallery>
          {photos.map((photo, index) => (
            <GalleryItem
              key={index}
              onPress={() =>
                navigation.navigate('PlacePhoto', {
                  photo,
                  place,
                })
              }
            >
              <GalleryImage source={{ uri: photo.url }} />
            </GalleryItem>
          ))}
        </Gallery>
      </WrapScrollView>
      {modal && (
        <Fragment>
          <Modal>
            <ModalButton
              onPress={() => {
                pickCamera();
                setModal(false);
              }}
            >
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
              setModal(false);
            }}
          >
            <MaterialIcons name="close" size={32} color="white" />
          </ClosePhotoButton>
        </Fragment>
      )}
      {!modal && (
        <AddPhotoButton
          onPress={() => {
            if (!uploading) {
              setModal(true);
            }
          }}
        >
          {uploading && <ActivityIndicator size="small" color="white" />}
          {!uploading && (
            <MaterialIcons name="add-a-photo" size={32} color="white" />
          )}
        </AddPhotoButton>
      )}
    </Wrap>
  );
};

export default PlaceScreen;
