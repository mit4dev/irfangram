import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {IPostData} from '../post/Post';
import Video from 'react-native-video';
import config from '../../config';

export interface ISearchResultsProps {
  data?: IPostData[];
}

const RenderItem = ({item}: {item: IPostData}) => (
  <View style={renderStyles.container}>
    <TouchableOpacity activeOpacity={0.5} style={{flex: 1}}>
      {item.hasVideo ? (
        <Video
          source={config.assets.videos.video3}
          progressUpdateInterval={3000}
          repeat
          resizeMode="cover"
          style={renderStyles.content}
        />
      ) : (
        <Image
          source={{uri: item.imageUri}}
          style={renderStyles.content}
          resizeMethod="scale"
          resizeMode="cover"
        />
      )}
    </TouchableOpacity>
  </View>
);

const renderStyles = StyleSheet.create({
  container: {height: 250, flex: 1, padding: 2},
  content: {height: 246, width: '100%'},
});

export const SearchResults: React.FC<ISearchResultsProps> = ({data}) => {
  return (
    <FlatList
      contentContainerStyle={{padding: 5}}
      bounces={false}
      data={data}
      horizontal={false}
      numColumns={2}
      renderItem={RenderItem}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews
    />
  );
};
