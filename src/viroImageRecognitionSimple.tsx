import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  ViroScene,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
  ViroARPlane,
  ViroBox,
  ViroImage,
  ViroARImageMarker,
  ViroARTrackingTargets,
  //@ts-ignore
} from '@viro-community/react-viro';

// Outside of the render function, register the target
ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('./assets/logoImage.png'),
    orientation: 'Up',
    physicalWidth: 0.05, // real world width in meters
  },
});

const viroImageRecognitionSimple = () => {
  console.log('viro Image Recognition Simple test');
  return (
    <ViroARScene>
      <ViroARImageMarker target={'targetOne'}>
        <ViroBox position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default viroImageRecognitionSimple;
