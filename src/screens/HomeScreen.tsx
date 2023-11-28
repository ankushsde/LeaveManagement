// src/screens/HomeScreen.tsx

import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import EmployeeCard from '../components/EmployeeCard';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const [showLeaveSelection, setShowLeaveSelection] = useState(false);
  const navigation = useNavigation();

  const handleLeaveTypeSelect = () => {
    setShowLeaveSelection(true);
  };

  const route = useRoute(); // Import useRoute from '@react-navigation/native'

  const { params } = route;
  const { selectedFrom, selectedTo } = params || {};
  const { updateLeaveStatus } = route?.params?.params || {};
   

  return (
    <View style={styles.container}>
      <EmployeeCard
        pictureUrl="https://fastly.picsum.photos/id/64/60/60.jpg?hmac=Yxd5nAZvzLILvJ4ez9TItecle1JHyrdRjjhEgIU7pqU"
        name="Dorthey Boone"
        role="Software Engineer"
        all={1}
        used={2}
        available={0}
        updateLeaveStatus={updateLeaveStatus}
      />
      {/* Other components */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFAE42',
    // Add styling as needed
  },
});

export default HomeScreen;
