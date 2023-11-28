// src/screens/LeaveRequestScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import LeaveTypeSelection from '../components/LeaveTypeSelection';
import { useNavigation } from '@react-navigation/native';

export interface LeaveRequestScreenProps {
  navigation: any, // Add navigation prop
  updateLeaveStatus:()=> void;
}

const LeaveRequestScreen: React.FC<LeaveRequestScreenProps> = ({ navigation }) => {
  const [selectedFrom, setSelectedFrom] = useState<string | null>(null);
  const [selectedTo, setSelectedTo] = useState<string | null>(null);

  const handleSelectType = (type: string) => {
    // Handle the selected leave type (you can use state or any other logic)
    console.log(`Selected Leave Type: ${type}`);
  };

  const handleConfirm = () => {
    navigation.navigate('Home', {
      screen: 'Home', // Specify the screen name if using nested navigators
      params: {
        selectedFrom,
        selectedTo,
      },
    });
  
    navigation.setOptions({
      updateLeaveStatus: (used: number, available: number) => {
        console.log('Used days:', used);
        console.log('Available days:', available);
      },
    });
  };
  
  

  const handleNavigateToCalendar = (selectedDate: 'from' | 'to') => {
    navigation.navigate('Calendar', {
      onSelectDates: (startDate: string, endDate: string) => {
        setSelectedFrom(startDate);
        setSelectedTo(endDate);
      },
      selectedDate,
    });
  };

  return (
    <View style={styles.container}>
      <Text>Leave Request Screen</Text>
      <LeaveTypeSelection onSelectType={handleSelectType} />
      <View style={styles.dateContainer}>
        <Text style={styles.title}>FROM</Text>
        <TouchableOpacity onPress={() => handleNavigateToCalendar('from')}>
          <Text style={styles.dateButton}>{selectedFrom || 'Select Date'}</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <Text style={styles.title}>TO</Text>
        <TouchableOpacity onPress={() => handleNavigateToCalendar('to')}>
          <Text style={styles.dateButton}>{selectedTo || 'Select Date'}</Text>
        </TouchableOpacity>
      </View>
      <Button title="Confirm" onPress={handleConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Add styling as needed
  },
  dateContainer: {
    marginTop: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 8,
    width: '80%', // Adjust the width as needed
  },
  dateButton: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LeaveRequestScreen;
