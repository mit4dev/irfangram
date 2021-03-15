import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

export interface IHeaderProps {
  left?: ReactNode;
  right?: ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({left, right}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{flex: 1}}>{left && left}</View>
        <View style={styles.wrapper}>{right && right}</View>
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
