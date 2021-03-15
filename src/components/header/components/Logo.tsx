import React from 'react';
import {Image, StyleSheet} from 'react-native';
import config from '../../../config';

export interface ILogoProps {}

export const Logo: React.FC<ILogoProps> = () => {
  return <Image source={config.assets.images.logo} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 30,
  },
});
