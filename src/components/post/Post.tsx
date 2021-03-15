import React, { useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import faker from 'faker';
import config from '../../config';
import { useScreenDimensions } from '../../hooks/useDimensions';
import { circle, square } from '../../utils';

export interface IPostData {
  imageUri?: string;
  userName?: string;
  hasVideo?: boolean;
}

export interface IPostProps {
  data: IPostData;
}

export const Post: React.FC<IPostProps> = ({
  data: { imageUri = '', userName = '', hasVideo },
}: IPostProps) => {
  const screen = useScreenDimensions();
  const [sliderIndex, setSliderIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const likedByImageUri = useRef(faker.image.image());
  const likedBy = useRef(faker.internet.userName());
  const likesCount = useRef(Math.ceil(Math.random() * 100000));
  const commentsCount = useRef(Math.ceil(Math.random() * 1000));
  const hoursBefore = useRef(Math.ceil((Math.random() * 100) % 22) + 1);
  const commenterImageUri = useRef(faker.image.image());

  const onScroll = ({ nativeEvent }) => {
    const index = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    setSliderIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <View style={{ padding: 1, backgroundColor: 'red', borderRadius: 100 }}>
            <Image source={{ uri: imageUri }} style={{ ...circle(30), borderWidth: 1, borderColor: '#fff' }} />
          </View>
          <Text style={{ fontSize: 11, fontWeight: '600', marginLeft: 10 }}>{userName}</Text>
        </View>
        <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={config.assets.images.ellipsisV} style={{ ...square(15), marginRight: 20 }} />
        </View>
      </View>

      {/* Slider */}
      <View style={{ height: screen.height * .45, width: screen.width }}>
        <ScrollView pagingEnabled horizontal scrollEventThrottle={16} showsHorizontalScrollIndicator={false} bounces={false} onScroll={onScroll}>
          <Image style={{ height: screen.height * .45, width: screen.width }} source={config.assets.images.bigImage} resizeMethod="resize" resizeMode="cover" />
          <Image style={{ height: screen.height * .45, width: screen.width }} source={config.assets.images.bigImage} resizeMethod="resize" resizeMode="cover" />
        </ScrollView>
      </View>

      {/* Slider footer and pagination dots */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <TouchableOpacity activeOpacity={0.3} onPress={() => setLiked(!liked)}><Image source={liked ? config.assets.images.heartFilled : config.assets.images.heart} style={[{ ...square(20), marginRight: 10, tintColor: '#000' }, liked ? { tintColor: '#FD1D1D' } : {}]} /></TouchableOpacity>
          <Image source={config.assets.images.speechBuble} style={{ ...square(20), marginHorizontal: 10 }} />
          <Image source={config.assets.images.direct} style={{ ...square(20), marginHorizontal: 10 }} />
        </View>
        <View style={styles.dots}>
          <View style={[styles.dot, sliderIndex === 0 ? styles.dot_active : {}]} />
          <View style={[styles.dot, sliderIndex === 1 ? styles.dot_active : {}]} />
        </View>
        <View>
          <Image source={config.assets.images.bookmark} style={{ ...square(20), marginRight: 10 }} />
        </View>
      </View>


      {/* Likes, comments and timeDiff */}
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: likedByImageUri.current }} style={{ ...circle(20) }} />
          <Text style={{ marginLeft: 5, fontSize: 13, }}><Text style={{ fontWeight: '700' }}>{likedBy.current}</Text> ve <Text style={{ fontWeight: '700' }}>{likesCount.current?.toLocaleString('tr-TR')} kişi </Text>beğendi</Text>
        </View>
        <View style={{ marginVertical: 5, }}>
          <Text style={{ color: 'gray', fontSize: 12, }}>{commentsCount.current} yorumun tamamını gör</Text>
        </View>
        <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: commenterImageUri.current }} style={{ ...circle(25) }} />
          <Text style={{ marginLeft: 10, color: 'grey', fontSize: 13 }}>Yorum ekle ...</Text>
        </View>
        <View>
          <Text style={{ fontSize: 10, color: 'gray' }}>{hoursBefore.current} saat önce</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { borderColor: 'lightgray', borderBottomWidth: 0.5 },
  header: { flexDirection: 'row', borderBottomWidth: 0.5, borderColor: 'lightgray' },

  dots: { position: 'absolute', flexDirection: 'row', width: '100%', justifyContent: 'center', },
  dot: { backgroundColor: 'rgba(0,0,0,.25)', borderRadius: 10, width: 8, height: 8, margin: 2 },
  dot_active: { backgroundColor: 'rgba(24,119,242,.75)' },

});
