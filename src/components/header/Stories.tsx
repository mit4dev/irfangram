import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import faker from 'faker';
import {circle} from '../../utils';

const data = new Array(15).fill(0).map((_) => ({
  avatar: faker.image.image(),
  username: faker.internet.userName(),
}));

export interface IStoriesProps {}
export const Stories: React.FC<IStoriesProps> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <View style={styles.renderWrapper}>
            <View
              style={[
                styles.imageWrapper,
                {
                  backgroundColor:
                    Math.random() > 0.5 ? '#E1306C' : 'lightgray',
                },
              ]}>
              <Image source={{uri: item.avatar}} style={styles.image} />
            </View>
            <Text numberOfLines={1} style={styles.text}>
              {item.username}
            </Text>
          </View>
        )}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {borderBottomWidth: 0.5, borderColor: 'lightgray'},
  renderWrapper: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    maxWidth: 100,
    padding: 5,
  },
  imageWrapper: {
    padding: 2,
    borderRadius: 50,
  },
  image: {
    ...circle(50),
    marginBottom: 0,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  text: {marginTop: 5, fontSize: 11, color: 'black'},
});
