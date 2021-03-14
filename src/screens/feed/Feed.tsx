import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/header/Header';
import { Stories } from '../../components/header/Stories';
import { Post } from '../../components/post/Post';
import config from '../../config';

export interface IFeedProps { }

export const Feed: React.FC<IFeedProps> = () => {
  const [searching, setSearching] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      {/* <Posts /> */}
      <Post />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
