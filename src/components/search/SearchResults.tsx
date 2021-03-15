import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { IPostData } from '../post/Post';

export interface ISearchResultsProps {
  data?: IPostData[];
}

const RenderItem = ({ item }: { item: IPostData }) => (
  <View style={{ height: 100, flex: 1, padding: 2, }}>
    <TouchableOpacity activeOpacity={0.5} style={{ flex: 1 }}>
      {item.hasVideo ?
        <Text>Video</Text>
        : <Image source={{ uri: item.imageUri }} style={{ height: 96, width: '100%' }} resizeMethod="scale" resizeMode="cover" />
      }
    </TouchableOpacity>
  </View>
)

export const SearchResults: React.FC<ISearchResultsProps> = ({ data }) => {

  return (
    <FlatList
      contentContainerStyle={{ padding: 5 }}
      bounces={false}
      data={data}
      horizontal={false}
      numColumns={4}
      renderItem={RenderItem}
    // ListHeaderComponent={}
    />
  );
};

