import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  stepper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.border,
  },
  stepItem: {
    alignItems: 'center',
    width: 72,
  },
  stepCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  stepCircleActive: {
    backgroundColor: COLORS.orangeSoft,
  },
  stepLabel: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.stepInactive,
  },
  stepLabelActive: {
    color: COLORS.text,
    fontWeight: '600',
  },
  stepLine: {
    flex: 1,
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: COLORS.stepLine,
    marginTop: 22,
    marginHorizontal: 4,
    maxWidth: 48,
  },
});
