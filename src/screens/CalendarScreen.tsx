import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Calendar, DateCallbackHandler } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

export interface CalendarScreenProps {
  route: {
    params: {
      onSelectDates: (startDate: string, endDate: string) => void;
    };
  };
}

const CalendarScreen: React.FC<CalendarScreenProps> = ({ route }) => {
  const [selectedDates, setSelectedDates] = useState<Record<string, DateCallbackHandler>>({});
  const navigation = useNavigation();

  const onSelectDates = route.params.onSelectDates;

  const handleDayPress: DateCallbackHandler = (day) => {
    // Update selected dates
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [day.dateString]: { selected: true, marked: true },
    }));
  };

  const handleSelect = () => {
    // Get selected dates
    const selectedDateStrings = Object.keys(selectedDates);
    const startDate = selectedDateStrings[0];
    const endDate = selectedDateStrings[selectedDateStrings.length - 1];
  
    // Log to check if the callback is invoked with correct values
    console.log('Selected Dates:', startDate, endDate);
  
    // Handle date selection logic
    onSelectDates(startDate, endDate);
  
    // Navigate back to LeaveRequestScreen
    navigation.navigate('LeaveRequest', {
      selectedFrom: startDate,
      selectedTo: endDate,
    });
  };
  

  return (
    <View style={styles.container}>
      <Calendar markingType="period" markedDates={selectedDates} onDayPress={handleDayPress} />
      <Button title="Select" onPress={handleSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalendarScreen;
