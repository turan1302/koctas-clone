import { View } from 'react-native';
import { W, H, colors } from '../colors';
import styles from './styles';

const ChevronBackground = () => {
  return (
    <View style={styles.chevronLayer} pointerEvents="none">
      {colors.chevron.map((color, index) => {
        const halfBase = W * 0.95 + index * (W * 0.12);
        const tipHeight = H * 0.42 + index * (H * 0.06);

        return (
          <View
            key={color}
            style={[
              styles.chevron,
              {
                top: H * 0.02 + index * (H * 0.065),
                borderLeftWidth: halfBase,
                borderRightWidth: halfBase,
                borderTopWidth: tipHeight,
                borderTopColor: color,
                zIndex: colors.chevron.length - index,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default ChevronBackground;
