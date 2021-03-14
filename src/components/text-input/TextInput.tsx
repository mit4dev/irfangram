import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';

type PickedProps = Partial<
  Pick<
    TextInputProps,
    | 'numberOfLines'
    | 'placeholder'
    | 'onChangeText'
    | 'secureTextEntry'
    | 'onSubmitEditing'
  >
>;

export interface ITextInputProps extends PickedProps {}

export const TextInput: React.FC<ITextInputProps> = ({
  numberOfLines = 1,
  onChangeText,
  placeholder = '',
  secureTextEntry,
  onSubmitEditing,
}: ITextInputProps) => {
  return (
    <RNTextInput
      blurOnSubmit
      secureTextEntry={secureTextEntry}
      numberOfLines={numberOfLines}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      placeholder={placeholder}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderRadius: 4,
    borderColor: '#bfbfbf',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ececec',
  },
});
