import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
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
  //@ts-ignore
} from '@viro-community/react-viro';

import viroArPlane from './src/viroArPlane';
import viroImageRecognitionSimple from './src/viroImageRecognitionSimple';
import viroKittenDemo from './src/viroKittenDemo';

const ThreeDimentionalOnly = () => {
  const [text, setText] = useState('Initializing AR...');
  console.log('fly fly');
  function onInitialized(state: any, reason: any) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  return (
    <ViroScene>
      <ViroText
        text={'text'}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: viroKittenDemo,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
