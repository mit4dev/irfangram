import {IPostData} from './components/post/Post';
import faker from 'faker';

export const square = (size = 20) => ({
  width: size,
  height: size,
});

export const circle = (size = 20) => ({
  ...square(size),
  borderRadius: size,
});

export const generatePostsData = (count = 20): IPostData[] =>
  new Array(count).fill(0).map(
    (_) =>
      ({
        userName: faker.internet.userName(),
        hasVideo: Math.random() > 0.5,
        imageUri: faker.image.image(),
      } as IPostData),
  );
