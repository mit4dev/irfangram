import React, { ReactNode } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import config from '../../config';

export interface IHeaderProps {
  left?: ReactNode;
  right?: ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({ left, right }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ flex: 1 }}>
          {left && left}
          {/* <Image source={config.assets.images.logo} style={styles.logo} /> */}
        </View>
        <View style={styles.wrapper}>
          {right && right}
          {/* <Image source={config.assets.images.add} style={styles.icon} />
          <Image source={config.assets.images.heart} style={styles.icon} />
          <Image
            source={config.assets.images.messenger}
            style={[styles.icon, { marginRight: 0 }]}
          /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  wrapper: {
    flexDirection: 'row',
  },
  icon: {
    width: 22.5,
    height: 22.5,
    marginHorizontal: 10,
  },
});
