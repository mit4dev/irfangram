import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from '../../components/header/Header';
import {Stories} from '../../components/header/Stories';
import {Posts} from '../../components/post/Posts';
import {useDisableBackButton} from '../../hooks/useDisableBackButton';

export interface IFeedProps {}

export const Feed: React.FC<IFeedProps> = () => {
  useDisableBackButton();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* <Stories /> */}
      <Posts />

      {/* <Post /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
