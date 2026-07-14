import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const LiveBanner = ({ onPress }) => {
  return (
    <Pressable style={styles.liveBanner} onPress={onPress}>
      <View style={styles.liveRingOuter} />
      <View style={styles.liveRingMid} />
      <View style={styles.liveRingInner} />
      <View style={styles.liveLogoRow}>
        <Text style={styles.liveLogoKoctas}>koçtaş</Text>
        <Text style={styles.liveLogoLive}>live</Text>
        <View style={styles.liveDot} />
      </View>
      <Text style={styles.liveSubtitle}>İzle, Keşfet, İlham Al!</Text>
    </Pressable>
  );
};

export default LiveBanner;
