import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const SocialAuth = ({ onGooglePress, onSignupPress }) => {
  return (
    <View>
      <View style={styles.googleWrap}>
        <Pressable style={styles.googleBtn} onPress={onGooglePress}>
          <Text style={styles.googleG}>G</Text>
        </Pressable>
      </View>

      <Pressable style={styles.signupBtn} onPress={onSignupPress}>
        <Text style={styles.signupText}>Üye Ol</Text>
      </Pressable>
    </View>
  );
};

export default SocialAuth;
