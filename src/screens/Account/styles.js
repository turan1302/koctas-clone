import { StyleSheet } from 'react-native';
import { COLORS } from '../../components/Account/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 32,
  },
});
