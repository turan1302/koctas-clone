import { View, Text, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, BANNER_ICONS } from '../colors';
import styles from './styles';

const PromoBanner = ({
  counter = '1 / 45',
  time = '10.00-13.00',
  icons = BANNER_ICONS,
  onPress,
}) => {
  return (
    <View style={styles.bannerWrap}>
      <View style={styles.bannerCard}>
        <View style={styles.bannerPurple}>
          <View style={styles.bannerCounter}>
            <Text style={styles.bannerCounterText}>{counter}</Text>
          </View>

          <Text style={styles.bannerEyebrow}>ONLARCA KATEGORİDE</Text>

          <View style={styles.bannerIconsRow}>
            {icons.map((icon) => (
              <MaterialCommunityIcons
                key={icon}
                name={icon}
                size={18}
                color="rgba(255,255,255,0.85)"
              />
            ))}
          </View>

          <Text style={styles.bannerHeadline}>
            <Text style={styles.bannerHeadlineAccent}>3.000 TL</Text>
            {' ÜZERİ ALIŞVERİŞE '}
            <Text style={styles.bannerHeadlineAccent}>%30 İNDİRİM!</Text>
          </Text>

          <View style={styles.bannerTime}>
            <Feather name="clock" size={12} color={COLORS.white} />
            <Text style={styles.bannerTimeText}>{time}</Text>
          </View>
        </View>

        <View style={styles.bannerFooter}>
          <Text style={styles.bannerFooterText}>
            Belirli Saatlerde Alışveriş Yapan İndirimi Kapıyor! 😎
          </Text>
          <Pressable style={styles.bannerArrowBtn} onPress={onPress}>
            <Feather name="arrow-right" size={20} color={COLORS.white} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PromoBanner;
