import React from 'react';
import {View, Dimensions} from 'react-native';

export interface IOverlayProps {
  active?: boolean;
}

export const Overlay: React.FC<IOverlayProps> = ({
  active = false,
}: IOverlayProps) => {
  return (
    <>
      {active && (
        <View
          style={{
            zIndex: 1111,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            backgroundColor: 'rgba(255,255,255,0.5)',
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height,
          }}
        />
      )}
    </>
  );
};
