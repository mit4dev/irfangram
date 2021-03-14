import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import faker from 'faker';
import config from '../../config';
import { useScreenDimensions } from '../../hooks/useDimensions';

export interface IPostProps { }
export const Post: React.FC<IPostProps> = () => {
  const screen = useScreenDimensions();
  const [liked, setLiked] = useState(false);

  return (
    <View style={{ borderColor: 'lightgray', borderBottomWidth: 0.5 }}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderColor: 'lightgray', }}>
        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <View style={{ padding: 1, backgroundColor: 'red', borderRadius: 100 }}>
            <Image source={{ uri: faker.image.image() }} style={{ width: 30, height: 30, borderRadius: 30, borderWidth: 1, borderColor: '#fff' }} />
          </View>
          <Text style={{ fontSize: 11, fontWeight: '600', marginLeft: 10 }}>{faker.internet.userName()}</Text>
        </View>
        <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={config.assets.images.ellipsisV} style={{ width: 15, height: 15, marginRight: 20 }} />
        </View>
      </View>

      <View>
        <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false} bounces={false}>
          <Image style={{ height: screen.height * .45, width: screen.width }} source={config.assets.images.bigImage} resizeMethod="resize" resizeMode="cover" />
          <Image style={{ height: screen.height * .45, width: screen.width }} source={config.assets.images.bigImage} resizeMethod="resize" resizeMode="cover" />
        </ScrollView>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Image source={config.assets.images.heart} style={{ width: 25, height: 25, marginRight: 10 }} />
          <Image source={config.assets.images.speechBuble} style={{ width: 25, height: 25, marginHorizontal: 10 }} />
          <Image source={config.assets.images.direct} style={{ width: 25, height: 25, marginHorizontal: 10 }} />
        </View>
        <View style={{ position: 'absolute', flexDirection: 'row', width: '100%', justifyContent: 'center', }}>
          <View style={{ backgroundColor: 'rgba(0,0,255,.75)', borderRadius: 10, width: 8, height: 8, margin: 2 }} />
          <View style={{ backgroundColor: 'rgba(0,0,0,.25)', borderRadius: 10, width: 8, height: 8, margin: 2 }} />
        </View>
        <View>
          <Image source={config.assets.images.bookmark} style={{ width: 25, height: 25, marginRight: 10 }} />
        </View>
      </View>
    </View>
  )
}