import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import faker from 'faker';

const data = new Array(15).fill(0).map((_) => ({
  avatar: faker.image.image(),
  username: faker.internet.userName(),
}));

export interface IStoriesProps { }
export const Stories: React.FC<IStoriesProps> = () => {
  return (
    <View style={{ borderBottomWidth: 0.5, borderColor: 'lightgray' }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', width: 100, maxWidth: 100, padding: 5 }}>
            <View style={{ padding: 2, borderRadius: 50, backgroundColor: Math.random() > .5 ? '#E1306C' : 'lightgray' }}>
              <Image
                source={{ uri: item.avatar }}
                style={{ width: 50, height: 50, borderRadius: 40, marginBottom: 0, borderWidth: 1.5, borderColor: '#fff' }}
              />
            </View>
            <Text numberOfLines={1} style={{ marginTop: 5, fontSize: 11, color: 'black' }}>{item.username}</Text>
          </View>
        )}
        horizontal
      />
    </View>
  );
};
