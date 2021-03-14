import React, { ReactNode } from 'react';
import {
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const ANDROID_VERSION_LOLLIPOP = 21;

export interface ITouchableRippleProps {
  style?: any;
  onPress?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  underlayColor?: string;
  rippleColor?: string;
  useHighlight?: string;
}

export const TouchableRipple = ({
  style,
  onPress,
  disabled,
  children,
  /**
   * underlayColor property
   * Determines the TouchableHighlight underlayColor when TouchableNativeFeedback is not supported
   */
  underlayColor: underlayColorProp,
  /**
   * backgroundColor property - color string in hex, hsl etc.
   * Determines the feedback color, for TouchableNativeFeedback and TouchableHighlight
   * This value used for all platforms (maybe we can split this property for Android and iOS)
   */
  rippleColor: rippleColorProp,
  /**
   * useHighlight property
   * Determines whether to use TouchableOpacity or TouchableHighlight when
   * TouchableNativeFeedback is not supported (iOS for example)
   * @default {boolean} false
   */
  useHighlight = false,
  borderless = false,
  activeOpacity = 0.5,
}) => {
  const defaultActiveColor = '#b8b8b8';
  const underlayColor = underlayColorProp || defaultActiveColor;
  const rippleColor = rippleColorProp || defaultActiveColor;
  const bg = TouchableNativeFeedback.Ripple(rippleColor, borderless);
  const _disabled = disabled || typeof onPress !== 'function';

  if (TouchableRipple.supported) {
    return (
      <TouchableNativeFeedback
        disabled={_disabled}
        background={bg}
        onPress={onPress}>
        <View style={[style]}>{React.Children.only(children)}</View>
      </TouchableNativeFeedback>
    );
  }

  if (useHighlight) {
    return (
      <TouchableHighlight
        style={[style]}
        disabled={_disabled}
        onPress={onPress}
        underlayColor={underlayColor}>
        {React.Children.only(children)}
      </TouchableHighlight>
    );
  }

  return (
    <TouchableOpacity
      style={[style]}
      disabled={_disabled}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      {React.Children.only(children)}
    </TouchableOpacity>
  );
};

TouchableRipple.supported =
  Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;