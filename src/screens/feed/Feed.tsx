import React from 'react';
import {  SafeAreaView, StyleSheet } from 'react-native';
import { Logo } from '../../components/header/components/Logo';
import { TripleButtons } from '../../components/header/components/TripleButtons';
import { Header } from '../../components/header/Header';
import { Posts } from '../../components/post/Posts';
import { useDisableBackButton } from '../../hooks/useDisableBackButton';

export interface IFeedProps { }

export const Feed: React.FC<IFeedProps> = () => {
  useDisableBackButton();

  return (
    <SafeAreaView style={styles.container}>
      <Header left={<Logo />} right={<TripleButtons />} />
      <Posts />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
