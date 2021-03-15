import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TextInputProps,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import config from '../../config';
import {square} from '../../utils';

type TextInputPickedProps = Partial<Pick<TextInputProps, 'placeholder'>>;
export interface ISearchbarProps extends TextInputPickedProps {
  onChangeText?: (value: string) => void;
}

export const Searchbar: React.FC<ISearchbarProps> = ({
  placeholder = 'Ara',
  onChangeText: onChangeTextProp,
}) => {
  const [text, setText] = useState('');
  const inputRef = useRef();

  const onChangeText = (value: string) => setText(value);

  const onOuterPress = () => {
    if (inputRef?.current) {
      inputRef.current?.focus();
    }
  };

  const onClear = () => setText('');

  useEffect(() => {
    if (typeof onChangeTextProp === 'function') {
      console.log('calling parent');
      onChangeTextProp(text);
    }
  }, [text]);

  return (
    <TouchableWithoutFeedback onPress={onOuterPress}>
      <View style={styles.wrapper}>
        <Image source={config.assets.images.loupe} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          value={text}
          onChangeText={onChangeText}
          ref={inputRef}
          style={styles.input}
        />
        {text?.trim()?.length > 0 && (
          <TouchableWithoutFeedback onPress={onClear}>
            <Image source={config.assets.images.cancel} style={styles.icon} />
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dedede',
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  input: {
    flex: 1,
    padding: 5,
    marginLeft: 5,
    backgroundColor: '#dedede',
    borderRadius: 4,
  },
  icon: {
    ...square(17.5),
    tintColor: 'gray',
  },
});
