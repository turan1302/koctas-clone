import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, STEPS } from '../colors';
import styles from './styles';

const CheckoutStepper = ({ steps = STEPS }) => {
  return (
    <View style={styles.stepper}>
      {steps.map((step, index) => (
        <React.Fragment key={step.key}>
          <View style={styles.stepItem}>
            <View
              style={[styles.stepCircle, step.active && styles.stepCircleActive]}
            >
              <MaterialCommunityIcons
                name={step.icon}
                size={22}
                color={step.active ? COLORS.orange : COLORS.stepInactive}
              />
            </View>
            <Text
              style={[styles.stepLabel, step.active && styles.stepLabelActive]}
            >
              {step.label}
            </Text>
          </View>
          {index < steps.length - 1 ? <View style={styles.stepLine} /> : null}
        </React.Fragment>
      ))}
    </View>
  );
};

export default CheckoutStepper;
