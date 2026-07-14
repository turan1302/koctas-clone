import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  chevronLayer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  chevron: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});
