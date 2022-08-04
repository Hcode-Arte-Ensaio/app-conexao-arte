import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { AntDesign } from '@expo/vector-icons';

const Wrap = styled.View`
  background-color: #000;
  flex: 1;
  position: relative;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  right: 20px;
`;

export const PlacePhotoScreen = ({ navigation, route }) => {
  const [imageUrls, setImageUrls] = React.useState<any[]>([
    {
      url: route.params.photo.url,
    },
  ]);

  useEffect(() => {
    setImageUrls([
      {
        url: route.params.photo.url,
      },
    ]);
  }, [route]);

  return (
    <Wrap>
      <ImageViewer imageUrls={imageUrls} />
      <CloseButton
        onPress={() => {
          navigation.navigate('Place', route.params.place);
        }}
      >
        <AntDesign name="close" size={24} color="white" />
      </CloseButton>
    </Wrap>
  );
};
