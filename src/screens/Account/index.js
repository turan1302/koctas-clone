import React, { useState } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import {
  AccountHeader,
  LoginForm,
  OrDivider,
  SocialAuth,
  OrderInquiry,
  COLORS,
} from '../../components/Account';
import styles from './styles';

const Account = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.orange} />
      <AccountHeader />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <LoginForm
          email={email}
          password={password}
          showPassword={showPassword}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onTogglePassword={() => setShowPassword((prev) => !prev)}
        />

        <OrDivider />

        <SocialAuth />

        <OrderInquiry
          open={orderOpen}
          onToggle={() => setOrderOpen((prev) => !prev)}
        />
      </ScrollView>
    </View>
  );
};

export default Account;
