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

const viroArPlane = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state: any, reason: any) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  console.log('here we go');
  return (
    <ViroARScene
      onTrackingUpdated={onInitialized}
      onAnchorFound={() => console.log('onAnchorFound')}
      onAnchorUpdated={() => console.log('onAnchorUpdated')}
      onAnchorRemoved={() => console.log('onAnchorRemoved')}>
      <ViroARPlane minHeight={0.1} minWidth={0.1} alignment={'Horizontal'}>
        <ViroBox position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} />
      </ViroARPlane>
    </ViroARScene>
  );
};

export default viroArPlane;
