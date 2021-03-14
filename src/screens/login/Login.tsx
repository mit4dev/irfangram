import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { Button } from '../../components/button/Button';
import { Overlay } from '../../components/overlay/Overlay';
import { TextInput } from '../../components/text-input/TextInput';
import config from '../../config';
import { ApplicationContext } from '../../context-providers/appplication/ApplicationContext';
import { SecurityActions } from '../../context-providers/appplication/auth/AuthActions';
import styles from './Login.styles';

export interface ILoginProps { }

export const Login: React.FC<ILoginProps> = () => {
  const nav = useNavigation();
  const context = useContext(ApplicationContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const loadingTimer = useRef(null);
  const imageSrc = config.assets.images.logo;

  const onUsernameChanged = (value) => setUsername(value);

  const onPasswordChanged = (value) => setPassword(value);

  const canSubmit = username?.trim() && password?.trim();

  const onLoginPressed = () => {
    if (loading || !canSubmit) {
      return;
    }

    setLoading(true);
    loadingTimer.current = setTimeout(() => {
      context.authDispatch(SecurityActions.SetIsAuthenticated(true));
      nav.navigate(config.navigation.tabStack.name, {
        screen: config.navigation.feedPage.name,
      });
    }, 1000);
  };

  useEffect(() => {
    // cleanup loadingTimer to prevent memory leaks (just in case)
    return () => {
      if (loadingTimer.current) {
        clearTimeout(loadingTimer.current);
      }
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.content]}>
        <View style={styles.section}>
          <Image source={imageSrc} style={styles.logo} />
        </View>
        <View style={[styles.section, styles.fullWidth]}>
          <TextInput
            placeholder="Telefon numarası, e-posta adresi veya kullanıcı adı"
            onChangeText={onUsernameChanged}
          />
        </View>
        <View style={[styles.section, styles.fullWidth]}>
          <TextInput
            placeholder={'Şifre'}
            secureTextEntry
            onChangeText={onPasswordChanged}
            onSubmitEditing={onLoginPressed}
          />
        </View>
        <Button
          loading={loading}
          disabled={!canSubmit}
          title={'Giriş yap'}
          activeOpacity={0.9}
          style={styles.fullWidth}
          onPress={onLoginPressed}
        />
      </View>
    </SafeAreaView>
  );
};
