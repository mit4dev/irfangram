import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

type TouchableProps = Partial<
  Pick<TouchableOpacityProps, 'style' | 'disabled' | 'activeOpacity'>
>;
export interface IButtonProps extends TouchableProps {
  onPress?: () => void;
  title?: string;
  loading?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  disabled = false,
  onPress: onPressProp,
  style,
  title = '',
  activeOpacity = 0.5,
  loading,
}: IButtonProps) => {
  const onPress = () => {
    if (typeof onPressProp === 'function') {
      onPressProp();
    }
  };

  return (
    <View
      style={[
        styles.container,
        style ?? {},
        disabled ? styles.container_disabled : {},
        loading ? styles.container_loading : {},
      ]}>
      <TouchableOpacity
        style={styles.touchable}
        activeOpacity={activeOpacity}
        disabled={disabled}
        onPress={onPress}>
        <View>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.text}>{title}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 11,
    backgroundColor: '#1877f2',
    borderRadius: 4,
  },
  touchable: {
    width: '100%',
    alignItems: 'center',
  },
  container_disabled: {
    opacity: 0.4,
  },
  container_loading: {
    opacity: 0.65,
  },
  text: {
    fontWeight: '700',
    color: '#fff',
  },
});
