import React, {useContext} from 'react';
import {
  View,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';
import colors from '../theme/Colors';

const LoginScreen = () => {
  const {googleLogin} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View>
          <SocialButton
            //
            buttonTitle="Sign In with Google"
            btnType="google"
            color={colors.white}
            backgroundColor ={colors.red}
            onPress={() => googleLogin()}
          />
        </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },

});