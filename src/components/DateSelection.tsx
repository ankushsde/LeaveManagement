// src/components/DateSelection.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CalendarScreen from '../screens/CalendarScreen';

interface DateSelectionProps {
  label: string;
}

const DateSelection: React.FC<DateSelectionProps> = ({ label }) => {
  const navigation = useNavigation();
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);

  const handleOpenCalendar = () => {
    navigation.navigate('Calendar', {
      onSelectDates: (startDate: string, endDate: string) => {
        setSelectedStartDate(startDate);
        setSelectedEndDate(endDate);
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TouchableOpacity onPress={handleOpenCalendar}>
        <Text>{selectedStartDate ? selectedStartDate : 'select '}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOpenCalendar}>
        <Text>{selectedEndDate ? selectedEndDate : 'select '}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default DateSelection;
