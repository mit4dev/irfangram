import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Image, TextInputProps, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import config from '../../config';
import { square } from '../../utils';

type TextInputPickedProps = Partial<Pick<TextInputProps, 'placeholder'>>;
export interface ISearchbarProps extends TextInputPickedProps {
  onChangeText?: (value: string) => void;
}

export const Searchbar: React.FC<ISearchbarProps> = ({
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
    // setText(value);
  }, [text]);

  return (
    <TouchableWithoutFeedback onPress={onOuterPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#dedede', paddingHorizontal: 10, borderRadius: 4 }}>
        <Image source={config.assets.images.loupe} style={{ ...square(17.5), tintColor: 'gray' }} />
        <TextInput placeholder="Ara" value={text} onChangeText={onChangeText} ref={inputRef} autoFocus style={{ flex: 1, padding: 5, marginLeft: 5, backgroundColor: '#dedede', borderRadius: 4 }} />
        {text?.trim()?.length > 0 && (
          <TouchableWithoutFeedback onPress={onClear}>
            <Image
              source={config.assets.images.cancel}
              style={{ ...square(17.5), tintColor: 'gray' }}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
