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
  ViroSpotLight,
  ViroDirectionalLight,
  ViroQuad,
  ViroMaterials,
  ViroARPlaneSelector,
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
const onLoadStart = () => {
  console.log('loadStart');
};
const onLoadEnd = () => {
  console.log('onLoadEnd');
};
const onError = (event: any) => {
  console.log('onError error', event.nativeEvent.error);
};

const viroKittenDemo = () => {
  console.log('viro Kitten Demo');
  return (
    // <ARPlaneSelectorTest />
    // <ShadowTest />
    // <LoadModelViaMarker />
    <LoadModel />
  );
};

const ARPlaneSelectorTest = () => {
  return (
    <ViroARScene>
      <ViroARPlaneSelector minHeight={0.5} minWidth={0.5}>
        <ViroSpotLight
          innerAngle={5}
          outerAngle={25}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={5}
          shadowOpacity={0.7}
        />
        {/* <Viro3DObject
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onError}
          source={require('./assets/kittenSurfer.glb')}
          position={[0, 0, 0]}
          scale={[0.02, 0.02, 0.02]}
          type="GLB"
        /> */}
        <ViroBox height={2} length={2} width={2} />
        <ViroAmbientLight color="#FFFFFF" />
        <ViroQuad
          position={[0, 0, 0]}
          rotation={[-90, 0, 0]}
          width={4}
          height={4}
          arShadowReceiver={true}
        />
      </ViroARPlaneSelector>
    </ViroARScene>
  );
};

const ShadowTest = () => {
  return (
    <ViroARScene>
      <ViroDirectionalLight
        color="#FFFFFF"
        direction={[0, -1, 0]}
        shadowOrthographicPosition={[0, 3, -5]}
        shadowOrthographicSize={10}
        shadowNearZ={2}
        shadowFarZ={3}
        shadowMapSize={2048}
        castsShadow={true}
      />
      {/* <ViroSpotLight
        innerAngle={5}
        outerAngle={25}
        direction={[0, -1, 0]}
        position={[0, 3, -5]}
        color="#ffffff"
        castsShadow={true}
        shadowMapSize={2048}
        shadowNearZ={2}
        shadowFarZ={5}
        shadowOpacity={0.7}
      /> */}

      {/* <ViroSpotLight
        position={[0, -1, 0]}
        color="#FFFFFF"
        direction={[0, -1, 0]}
        attenuationStartDistance={5}
        attenuationEndDistance={10}
        innerAngle={5}
        outerAngle={20}
        castsShadow={true}
      /> */}

      <ViroBox
        position={[0, 0, -0.05]}
        height={0.02}
        length={0.02}
        width={0.02}
        materials={['grid']}
      />

      {/* 
      <Viro3DObject
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
        source={require('./assets/kittenSurfer.glb')}
        position={[0, 0, -0.05]}
        // position={[1, -1, -5]}
        scale={[0.02, 0.02, 0.02]}
        // scale={[0.1, 0.1, 0.1]}
        type="GLB"
        // animation={{
        //   name: 'hover_rig',
        //   run: true,
        //   loop: true,
        //   delay: 1000,
        // }}
      /> */}

      <ViroQuad
        // position={[0, -2, -3]}
        position={[0, -0.05, 0]}
        rotation={[-90, 0, 0]}
        width={20}
        height={20}
        materials={['grid']}
      />
    </ViroARScene>
  );
};
const LoadModel = () => {
  return (
    <ViroARScene>
      <Viro3DObject
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
        highAccuracyEvents={true}
        source={require('./assets3/kittenSurf03VRX.vrx')}
        position={[0, 0, 0]}
        scale={[0.000001, 0.000001, 0.000001]}
        type="VRX"
        rotaion={[-90, 0, 0]}
        animation={{
          name: 'hover_rig',
          run: true,
          loop: true,
          delay: 1000,
        }}
      />
      {/* <ViroSpotLight
        position={[0, 2, 0]}
        color="#ffffff"
        direction={[0, 0, 0]}
        attenuationStartDistance={5}
        attenuationEndDistance={10}
        innerAngle={5}
        outerAngle={20}
        castsShadow={true}
      /> */}
      <ViroAmbientLight color="#FFFFFF" />
    </ViroARScene>
  );
};

const LoadModelViaMarker = () => {
  return (
    <ViroARScene>
      <ViroARImageMarker target={'targetOne'}>
        <Viro3DObject
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onError}
          source={require('./assets/kittenSurfer.glb')}
          position={[0, 0, 0]}
          scale={[0.02, 0.02, 0.02]}
          type="GLB"
          // animation={{
          //   name: 'hover_rig',
          //   run: true,
          //   loop: true,
          //   delay: 1000,
          // }}
        />
      </ViroARImageMarker>
      <ViroSpotLight
        position={[0, 2, 0]}
        color="#ffffff"
        direction={[0, 0, 0]}
        attenuationStartDistance={5}
        attenuationEndDistance={10}
        innerAngle={5}
        outerAngle={20}
        castsShadow={true}
      />
      <ViroAmbientLight color="#FFFFFF" />
    </ViroARScene>
  );
};

ViroMaterials.createMaterials({
  grid: {
    // diffuseTexture: require('./assets/checkerboard.png'),
    lightingModel: 'Lambert',
    // color: 'red',
  },
});

export default viroKittenDemo;
