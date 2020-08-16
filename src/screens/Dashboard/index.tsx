import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ padding: 60 }}>
      <Button onPress={signOut} title="sair" />
    </View>
  );
};

export default Dashboard;
