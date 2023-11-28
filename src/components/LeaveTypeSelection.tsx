// src/components/LeaveTypeSelection.tsx

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LeaveTypeSelectionProps {
  onSelectType: (type: string) => void;
}

const LeaveTypeSelection: React.FC<LeaveTypeSelectionProps> = ({
  onSelectType,
}) => {
  const leaveTypes = ['Annual', 'Parental', 'Unpaid', 'Special'];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {leaveTypes.slice(0, 2).map((type) => (
          <TouchableOpacity
            key={type}
            style={styles.button}
            onPress={() => onSelectType(type)}
          >
            <Text>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {leaveTypes.slice(2).map((type) => (
          <TouchableOpacity
            key={type}
            style={styles.button}
            onPress={() => onSelectType(type)}
          >
            <Text>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16, // Add top margin for spacing
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16, // Add bottom margin for spacing between rows
  },
  button: {
    backgroundColor: 'lightblue', // Add button background color
    padding: 16,
    borderRadius: 8,
    margin: 8, // Add margin for spacing between buttons
    alignItems: 'center',
    width: '40%', // Set the width of each button
  },
});

export default LeaveTypeSelection;
