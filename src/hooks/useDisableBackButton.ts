import {useEffect} from 'react';
import {BackHandler} from 'react-native';

export const useDisableBackButton = () => {
  const handleBackButton = () => {
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);
  return;
};
