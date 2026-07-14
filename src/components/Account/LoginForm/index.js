import { View, Text, TextInput, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../colors';
import styles from './styles';

const LoginForm = ({
  email,
  password,
  showPassword,
  onEmailChange,
  onPasswordChange,
  onTogglePassword,
  onForgotPress,
  onLoginPress,
}) => {
  return (
    <View>
      <View style={styles.fieldGroup}>
        <Text style={styles.label}>E-posta</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={COLORS.label}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Şifre</Text>
        <View style={styles.passwordWrap}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={onPasswordChange}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={COLORS.label}
          />
          <Pressable
            style={styles.eyeBtn}
            hitSlop={8}
            onPress={onTogglePassword}
          >
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color={COLORS.muted}
            />
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.forgotBtn} onPress={onForgotPress}>
        <Text style={styles.forgotText}>Şifremi Unuttum</Text>
      </Pressable>

      <Pressable style={styles.loginBtn} onPress={onLoginPress}>
        <Text style={styles.loginBtnText}>Giriş Yap</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
