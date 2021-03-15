import React from 'react';
import {Image, StyleSheet} from 'react-native';
import config from '../../../config';
import {square} from '../../../utils';

export const TripleButtons: React.FC = () => (
  <>
    <Image source={config.assets.images.add} style={styles.icon} />
    <Image source={config.assets.images.heart} style={styles.icon} />
    <Image
      source={config.assets.images.messenger}
      style={[styles.icon, {marginRight: 0}]}
    />
  </>
);

const styles = StyleSheet.create({
  icon: {
    ...square(22.5),
    marginHorizontal: 10,
  },
});
