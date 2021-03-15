import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from '../../components/header/Header';
import {IPostData} from '../../components/post/Post';
import {SearchResults} from '../../components/search/SearchResults';
import {Searchbar} from '../../components/searchbar/Searchbar';
import useIsFirstRender from '../../hooks/useIsFirstRender';
import {generatePostsData} from '../../utils';

export interface ISearchProps {}
// let searchTimeout = null;
export const Search: React.FC<ISearchProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchTimeout = useRef(null);
  const isFirstRender = useIsFirstRender();
  const [data, setData] = useState<IPostData[]>(() => generatePostsData(50));

  const onChangeText = (value: string) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout?.current);
      console.log('clearing');
    }

    searchTimeout.current = setTimeout(() => {
      console.log(value);
      setSearchTerm(value);
    }, 300);
  };

  useEffect(() => {
    if (isFirstRender) {
      return;
    }

    // generate new data randomly
    setData(
      searchTerm?.trim()?.length > 0
        ? generatePostsData(Math.ceil(Math.random() * 12) + 1)
        : [],
    );
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      <Header left={<Searchbar onChangeText={onChangeText} />} />
      <SearchResults data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
