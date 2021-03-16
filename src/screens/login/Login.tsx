import {useNavigation} from '@react-navigation/core';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {Button} from '../../components/button/Button';
import {TextInput} from '../../components/text-input/TextInput';
import config from '../../config';
import {ApplicationContext} from '../../context-providers/appplication/ApplicationContext';
import {AuthActions} from '../../context-providers/appplication/auth/AuthActions';
import {IAuthState} from '../../context-providers/appplication/auth/AuthReducer';
import {AuthService} from '../../services/auth/AuthService';
import styles from './Login.styles';

export interface ILoginProps {}

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
    loadingTimer.current = setTimeout(async () => {
      const authState: IAuthState = {isAuthenticated: true, password, username};
      await AuthService.save({...authState});
      console.log('got', await AuthService.get());
      console.log('saving');
      context.authDispatch(AuthActions.SetAll({...authState}));
      console.log('dispatching');
      console.log('navigating');
      nav.navigate(config.navigation.tabStack.name, {
        screen: config.navigation.feedPage.name,
      });
    }, 500);
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
