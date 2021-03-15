import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {generatePostsData} from '../../utils';
import {Stories} from '../header/Stories';
import {Post} from './Post';

export interface IPostsProps {}

const RenderItem = ({item, index}) => (
  <View>
    <Post data={item} />
  </View>
);

export const Posts: React.FC<IPostsProps> = () => {
  const [data, setData] = useState(() => generatePostsData(5));
  const [loadingMore, setLoadingMore] = useState(false);

  const onEndReached = () => {
    if (loadingMore) {
      return;
    }

    setLoadingMore(true);
    console.log('loading more');
    setData((d) => [...d, ...generatePostsData(3)]);
    setLoadingMore(false);
  };

  return (
    <FlatList
      ListHeaderComponent={Stories}
      data={data}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      bounces={false}
      renderItem={RenderItem}
      onEndReachedThreshold={2}
      onEndReached={onEndReached}
    />
  );
};
