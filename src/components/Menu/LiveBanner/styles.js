import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  liveBanner: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: COLORS.orangeSoft,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  liveRingOuter: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: COLORS.orangeRing,
    opacity: 0.55,
  },
  liveRingMid: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: COLORS.orangeRing,
    opacity: 0.7,
  },
  liveRingInner: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.orangeRing,
  },
  liveLogoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  liveLogoKoctas: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.orange,
  },
  liveLogoLive: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
    marginLeft: 6,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.liveRed,
    marginLeft: 4,
    marginBottom: 10,
  },
  liveSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: COLORS.muted,
    zIndex: 1,
  },
});
